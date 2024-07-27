//1. Create a function fetchData that returns a Promise
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched successfully");
      }, 2000);
    });
  }
  
  fetchData().then((data) => {
    console.log(data);
  });

//2. Modify fetchData to sometimes reject the Promise

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5; 
        if (success) {
          resolve("Data fetched successfully");
        } else {
          reject("Failed to fetch data");
        }
      }, 2000);
    });
  }
  
  fetchData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

