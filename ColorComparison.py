'''
Author: kryst4lskyxx 906222327@qq.com
Date: 2023-06-29 13:23:57
LastEditors: kryst4lskyxx 906222327@qq.com
LastEditTime: 2023-06-29 13:24:04
FilePath: /Multimedia-Analytics-master/ColorComparison.py
Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
'''
import cv2
import numpy as np
import matplotlib.pyplot as plt


def get_main_colors(image_path):
    image = cv2.imread(image_path)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    # Reduce each color channel to 2 bits
    reduced_color_image = image // 64
    # Flatten the image and compute color counts
    flattened_image = reduced_color_image.reshape(-1, 3)
    unique_colors, counts = np.unique(
        flattened_image, axis=0, return_counts=True)
    # Sort colors by their count
    sorted_indices = np.argsort(-counts)
    unique_colors = unique_colors[sorted_indices]
    counts = counts[sorted_indices]

    return unique_colors, counts
