"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(empID, firstName, lastName, department) {
        this.salary = 0.0; //proctected property - access is restricted to the class and its sub classes only; cannot be accessed anywhere else
        this.empID = empID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }
    showDetails() {
        console.log(`\nEmployee ID : ${this.empID}`);
        console.log(`Employee Name : ${this.firstName} ${this.lastName}`);
        console.log(`Department : ${this.department}`);
        // console.log(`Salary : ${this.salary}`);
    }
    getSalary() {
        return this.salary;
    }
    calculateTax() {
        return this.salary * 0.10;
    }
}
exports.default = Employee;
