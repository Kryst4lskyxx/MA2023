const data = {
  nodes: [
    {id: 1, type: 'menu', name: 'Time', r: 50, color: '#00000000', cover: './painting-ideas-featured-1.png'},
  ],
  links: []
}

const delPromise = function () {
  const response = {
    code: 200
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response)
    }, 100)
  })
}

const addNodes = (i) => {
  return new Promise((resolve, reject) => {
    fetch(`./jsonData/res_${i}.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch res_${i}.json`);
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};


const addNodes_1 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_1.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_2 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_2.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_3 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_3.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_4 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_4.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_5 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_5.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_6 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_6.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_7 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_7.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_8 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_8.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_9 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_9.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_10 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_10.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_11 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_11.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_12 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_12.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_13 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_13.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_14 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_14.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_15 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_15.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_16 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_16.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_17 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_17.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_18 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_18.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_19 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_19.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_20 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_20.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const addNodes_21 = () => {
  return new Promise((resolve, reject) => {
    fetch('./jsonData/res_21.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch json');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
