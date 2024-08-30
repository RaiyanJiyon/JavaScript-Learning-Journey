let numbers = [1, 2, 3, 4, 5];  // Array of numbers

// find() method
// Find the first even number in the array
let firstEvenNumber = numbers.find(x => x % 2 === 0);
console.log(firstEvenNumber);  // Output: 2

// findIndex() method
// Find the index of the first even number in the array
let firstEvenIndex = numbers.findIndex(x => x % 2 === 0);
console.log(firstEvenIndex);  // Output: 1


const students = [
    {
        id: 201,
        name: 'John',
        gpa: 2.4
    },
    {
        id: 202,
        name: 'Roman',
        gpa: 3.7
    },
    {
        id: 203,
        name: 'Chris',
        gpa: 2.1
    },
];

// find() method
// Find the first student with a GPA greater than 3
let gpaFind = students.find(x => x.gpa > 3);
console.log(gpaFind);  // Output: { id: 202, name: 'Roman', gpa: 3.7 }

// findIndex() method
// Find the index of the first student with a GPA greater than 3
let gpaFindIndex = students.findIndex(x => x.gpa > 3);
console.log(gpaFindIndex);  // Output: 1