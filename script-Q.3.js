//3. Convert fetchData to use async and await

async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // 50% chance to succeed
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Failed to fetch data");
      }
    }, 2000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data); // "Data fetched successfully"
  } catch (error) {
    console.error(error); // "Failed to fetch data"
  }
}

getData();
