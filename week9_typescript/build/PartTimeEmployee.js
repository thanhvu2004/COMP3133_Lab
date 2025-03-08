"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
//Inherit from Employee class using 'extends' keyword
class PartTimeEmployee extends Employee_1.default {
    constructor(empID, firstName, lastName, department, hoursWorked, hourlyRate) {
        //Call the base class constructor (Employee)
        super(empID, firstName, lastName, department);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
        this.salary = this.getSalary();
    }
    //Override the getSalary method of the base class
    //to modify the salary calculation logic
    //Method overriding - same method signature in the base class and the derived class
    getSalary() {
        this.salary = this.hoursWorked * this.hourlyRate;
        return this.salary;
    }
    calculateTax() {
        return this.salary * 0.15;
    }
    showDetails() {
        super.showDetails();
        console.log(`Hours Worked : ${this.hoursWorked}`);
        console.log(`Hourly Rate : ${this.hourlyRate}`);
        console.log(`Salary : ${this.getSalary()}`);
        console.log(`Tax : ${this.calculateTax()}`);
    }
}
exports.default = PartTimeEmployee;
