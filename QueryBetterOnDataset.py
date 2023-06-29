import gensim.downloader

from nltk.tokenize import word_tokenize
import string
import sys

import pickle
import numpy as np

from sklearn.neighbors import NearestNeighbors

from GenerateEmbeddings import generateEmbeddings, reformateTitle, calculateAveragedEmbedding
from GenerateJson import generateJsonFiles

import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import time
import math

def preprocess_query(query):
    punctuation = set(string.punctuation)
    tokenizedSentence = word_tokenize(query)
    lowerCasedAndDepunctuated = [token.lower() for token in tokenizedSentence if token not in punctuation]
    return lowerCasedAndDepunctuated

def calculate_embedding(query, model):
    embeddings = []
    unknownWords = []
    for word in query:
        if word in model:
            embeddings.append(model[word])

        if word not in model:
            unknownWords.append(word)
    # Use same calculation as in the dataset embeddings -> if model does not at least 1 word we return None 
    averagedEmbedding = sum(embeddings) / len(embeddings) if len(embeddings) > 0 else None

    return averagedEmbedding

def retrieve_paintings(indices, df):
    selection = df.iloc[indices]
    return selection

def returnInfo(df):
    ids = df['id']
    image_paths = df['image'].tolist()
    dates = df['date'].tolist()
    names = df['artist_name'].tolist()
    nationalities = df['artist_nationality'].tolist()
    styles = df['style'].tolist()
    tags = df['tags'].tolist()
    medias = df['media'].tolist()
    titles = df['image'].tolist()
    titles = [reformateTitle(title) for title in titles]

    # This dict has the following format: 
    # {image_paths: ["pathImage1", "pathImage2"... "pathImage3"], dates: ["dateImage1", "dateImage2",.."dateImageN"], names: etc.}
    # So each list in the dict has same length, where index 0 corresponds to the closest painting w.r.t the query:
    infoPaintings = {"ids": ids, "image_paths": image_paths, "dates": dates, "names": names, "nationalities": nationalities, "styles": styles,
                     "tags": tags, "medias": medias, "titles": titles}
    return infoPaintings

def showPaintings(df):
    image_paths = df['image'].tolist()
    artist_names = df['artist_name'].tolist()
    tags = df['tags'].tolist()
    titles = df['image'].tolist()
    titles = [reformateTitle(title) for title in titles]

    # print(image_paths)
    image_paths = [f"./images/{img}"for img in image_paths]
    fig, axes = plt.subplots(2, 5, figsize=(12, 6))

    # Iterate over the image paths and plot each image
    for i, ax in enumerate(axes.flat):
        # Load the image using Matplotlib
        img = mpimg.imread(image_paths[i])
    
        # Plot the image
        ax.imshow(img)
        ax.axis('off')
        ax.set_title(f'Title: {titles[i]} \n Tags:{tags[i]} \n by {artist_names[i]}', fontdict={'fontsize': 7})

    # Adjust spacing between subplots
    plt.tight_layout()

    # Show the plot
    plt.show()  

#Helper functions
###############################################################################################################################################


def initializeRetrieval():
    print("Initializing retrieval...")

    # Load dataframe, model to encode user query, precomputed embeddings NearestNeighbors in memory
    with open('./SimilarPaintings/similarPaintings.pkl', 'rb') as file:
        df = pickle.load(file)
    model = gensim.downloader.load('glove-wiki-gigaword-50')
    loaded_embeddings = np.load('embeddingsPerPainting.npy')
    retrievalNumber = 10
    neigh = NearestNeighbors(n_neighbors=retrievalNumber)

    print("Finished initializing.")
    return df, model, loaded_embeddings, neigh

def retrievePaintings(df, model, loaded_embeddings, neigh):
    while True:
        user_input = input("Enter a topic of paintings you are interested in (or 'quit' to exit): ")
        if user_input == 'quit':
            break
        print(f"Searching for paintings related to: {user_input}")
        query1_processed = preprocess_query(user_input)
        query1_embedding = calculate_embedding(query=query1_processed, model=model)
        neigh.fit(loaded_embeddings)

        if query1_embedding is not None:
            neighbours = neigh.kneighbors(query1_embedding.reshape(1, -1))
            retrievedPaintings = retrieve_paintings(neighbours[1].flatten(), df)
            # Create JSON files
            generateJsonFiles(retrievedPaintings)
            showPaintings(retrievedPaintings)
            # infoPaintings = returnInfo(retrievedPaintings)

        else:
            print("query is not known to our model")

# Initialize search
df, model, loaded_embeddings, neigh = initializeRetrieval()
# Start user interaction
retrievePaintings(df=df, model=model, loaded_embeddings=loaded_embeddings, neigh=neigh)



