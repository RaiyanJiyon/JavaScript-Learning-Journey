/*
Example 2: Extracting Data from API Response
Destructuring is useful for extracting data from objects returned by APIs.
*/

const response = {
    status: 200,
    data: {
        user: { name: 'Alice', age: 25 },
        token: 'abc123'
    }
};

const { data: {user: {name, age}, token} } = response;
console.log(name);
console.log(age);
console.log(token);