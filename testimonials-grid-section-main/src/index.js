const tes = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World"), 2000);
    });
  }
  
  tes()
    .then(value => console.log(value));