import IPerson from "./IPerson";

export default class Employee implements IPerson {
    // firstName: string;
    // lastName: string;
    // department: string;
    // empID : number;
    // salary : number = 0.0;

    firstName: string; //public property - default access is public; can be accessed everywhere
    lastName: string;
    readonly department: string; //readonly property - cannot be modified once initialized
    private empID : number; //private property - access is restricted to the class only; cannot be accesed even in the sub class or anywhere else
    protected salary : number = 0.0; //proctected property - access is restricted to the class and its sub classes only; cannot be accessed anywhere else

    constructor(empID : number, 
        firstName : string, lastName : string, department : string){
        this.empID = empID;
        this.firstName = firstName;
        this.lastName = lastName;  
        this.department = department;
    }     

    showDetails(): void {
        console.log(`\nEmployee ID : ${this.empID}`);
        console.log(`Employee Name : ${this.firstName} ${this.lastName}`);
        console.log(`Department : ${this.department}`);
        // console.log(`Salary : ${this.salary}`);
    }

    protected getSalary(): number{
        return this.salary;
    }

    protected calculateTax(): number{
        return this.salary * 0.10;
    }

}