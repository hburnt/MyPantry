let users = []; // Simulated storage for user data

// Function to add a user to the simulated database (for demonstration purposes)
function addUser(username, password, uid) {
    users.push({ username, password, uid });
}

// Function to authenticate a user
function authenticateUser(username, password) {
    // Find the user by username
    const user = users.find(user => user.username === username);

    // Check if the user exists and the password matches
    if (user && user.password === password) {
        return { success: true, uid: user.uid, message: 'Authentication successful' };
    } else {
        return { success: false, message: 'Invalid username or password' };
    }
}

// Adding some sample users for demonstration
addUser('test1', 'test1', 'uid1');
addUser('test2', 'test2', 'uid2');
