class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    // set method to update the student's name
    set studentName(name) {
        this.name = name;
    }

    // get method to retrieve student details
    get studentDetails() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

let p1 = new Student(221, "John");
console.log(p1);           // Logs the entire object
console.log(p1.id);         // Logs the student's ID
console.log(p1.name);       // Logs the student's initial name

p1.studentName = "John Wick"; // Updates the student's name using the setter
console.log(p1.name);       // Logs the updated name

let p1Details = p1.studentDetails; // Accesses the student details using the getter

console.log(p1Details);     // Logs the student's details (ID and updated name)