function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: "John Doe" };
      if (user) {
        resolve(user);
      } else {
        reject("Failed to get user");
      }
    }, 2000);
  });
}

fetchUserData()
  .then((user) => {
    console.log("User data fetched:", user);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
