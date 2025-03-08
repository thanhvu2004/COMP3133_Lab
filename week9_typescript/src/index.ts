import Student from "./Student";
import Employee from "./Employee";
import PartTimeEmployee from "./PartTimeEmployee";

console.log(`Week 9 - Intro to TypeScript`);

console.log(`Working with Student class\n`);

let stud1 = new Student(1, "John", "Doe", 80.0);
stud1.showDetails();

let stud2 = new Student(2, "Jane", "Doe", 85.0);
stud2.showDetails();

console.log(`Working with Employee class\n`);
let emp1 = new Employee(1, "John", "Doe", "IT");
emp1.showDetails();

//Error - Property 'salary' is protected and only accessible within class 'Employee' and its subclasses.
// emp1.salary = 50000;
// console.log(`Salary : ${emp1.getSalary()}`);
// console.log(`Tax : ${emp1.calculateTax()}`);

let emp2 = new Employee(2, "Jane", "Doe", "HR");
emp2.showDetails();

emp2.firstName = "Jill"

//Error - Cannot assign to 'department' because it is a read-only property
// emp2.department = "Finance"

//Error - Property 'salary' is protected
// emp2.salary = 60000;

emp2.showDetails();

console.log(`Working with PartTimeEmployee class\n`);

let ptEmp1 = new PartTimeEmployee(1, "John", "Doe", "IT", 160, 25);
ptEmp1.showDetails();

//Error - both getSalary() and calculateTax() are private methods
// console.log(`ptEmp1 Salary : ${ptEmp1.getSalary()}`);
// console.log(`ptEmp1 Tax : ${ptEmp1.calculateTax()}`);

let ptEmp2 = new PartTimeEmployee(2, "Jane", "Doe", "HR", 180, 30);
ptEmp2.showDetails();