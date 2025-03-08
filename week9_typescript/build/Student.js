"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    /*
    class attributes must be initialized with default value or in the constructor
    */
    constructor(id, firstName, lastName, result) {
        this.lastName = "NA";
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.result = result;
    } //constructor
    showDetails() {
        console.log(`Student Details: \n
            ID: ${this.id}\n
            First Name: ${this.firstName}\n
            Last Name: ${this.lastName}\n
            Result: ${this.result}`);
    } //showDetails
}
exports.default = Student;
