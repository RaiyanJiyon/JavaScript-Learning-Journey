let students = [
    {
        id: 101,
        name: 'John',
        gpa: 2.98,
    },
    {
        id: 102,
        name: 'Wick',
        gpa: 3.98,
    },
    {
        id: 103,
        name: 'Roman',
        gpa: 3.18,
    },
    {
        id: 104,
        name: 'Angela',
        gpa: 2.18,
    },
];

console.log(students);

// Function to get names of students with GPA greater than 3
function studentName() {
    return students.filter(function(x) {
        return x.gpa > 3;  // Filter students with GPA greater than 3
    }).map(function(y) {
        return y.name;  // Map the filtered students to their names
    });
};

console.log(studentName());  // Output: ["Wick", "Roman"]


// Arrow function to get the names of students with a GPA greater than 3
const showStudentName = () => 
    // Filter the students array to include only those with GPA greater than 3
    students.filter((x) => x.gpa > 3)
    // Map the filtered array to extract the names of the students
    .map((y) => y.name);

console.log(showStudentName());  // Output: ["Wick", "Roman"]
