/*
Task 2: User Management Module
Create a module called userManager.js that exports the following:

A default export: A function createUser(username) that logs a message when a new user is created.
A named export: A function deleteUser(username) that logs a message when a user is deleted.
In another file called app.js, import the createUser as a default import and deleteUser as a named import.

Create a user with the username "JohnDoe".
Delete the user "JohnDoe".
Log the appropriate messages to the console.
*/

function createUser(username) {
    console.log(`Welcome ${username}`);
};

function deleteUser(username) {
    console.log(`Good Bye ${username}`);
};

export {createUser, deleteUser};