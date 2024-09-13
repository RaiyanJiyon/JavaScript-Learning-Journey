/*
Task 1: Extract Names of Adults
Assume you have an array of people, and you want to extract only the names of people who are over 18.
*/

const people = [
    { name: 'John', age: 34 },
    { name: 'Roman', age: 24 },
    { name: 'Jason', age: 14 }
];

const adultNames = people
    .filter(person => person.age > 18)
    .map(person => console.log(person.name));

console.log(adultNames);