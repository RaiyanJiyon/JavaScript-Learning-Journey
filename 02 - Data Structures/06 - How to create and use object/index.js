// Normal way to create object and print
let student = {
    name : "Alex",
    age : 25,
    gender : "Male",
    language : ["English", "Spanish", "Bengali"]
}

console.log(student.name);
console.log(student.age);
console.log(student.gender);
console.log(student.language);


// Effective way to create a object with a constructor
function Student(name, age, gender, lang) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.lang = lang;
}

let student1 = new Student("John", 33, "Male", "English");
let student2 = new Student("Salina", 23, "Female", "German");

console.log(student1.name)
console.log(student1.age)

console.log(student2.name)
console.log(student2.age)


// Effective way to create a object and print with a constructor 
function Employee(name, location, position) {
    this.name = name;
    this.location = location;
    this.position = position;

    // create a method for display the Employee information
    this.display = function() {
        console.log(this.name);
        console.log(this.location);
        console.log(this.position);
    }
}

employee1 = new Employee("Wick", "Australia", "CEO");
employee1.display();

employee2 = new Employee("David", "USA", "Hiring Manager");
employee2.display();
