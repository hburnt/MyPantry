// Function to simulate user search
async function searchUser(username, password) {
  // Simulate user search with a delay
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          // Simulate finding a user
          if (username === 'test' && password === 'test') {
              // Return a mock user object
              resolve({ found: true, uid: '101000' });
          } else {
              // Return that user was not found
              resolve({ found: false });
          }
      }, 500); // Simulate a 1-second delay
  });
}
