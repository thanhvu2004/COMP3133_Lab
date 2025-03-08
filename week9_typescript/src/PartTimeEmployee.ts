import Employee from "./Employee";

//Inherit from Employee class using 'extends' keyword
export default class PartTimeEmployee extends Employee{
    hoursWorked : number
    hourlyRate : number

    constructor(
        empID : number, firstName : string, lastName : string, department : string, 
        hoursWorked : number, hourlyRate : number){
        //Call the base class constructor (Employee)
        super(empID, firstName, lastName, department)
        
        this.hoursWorked = hoursWorked
        this.hourlyRate = hourlyRate        

        this.salary = this.getSalary()
    }

    //Override the getSalary method of the base class
    //to modify the salary calculation logic
    //Method overriding - same method signature in the base class and the derived class
    protected getSalary(): number {
        this.salary = this.hoursWorked * this.hourlyRate
        return this.salary
    }

    protected calculateTax(): number {
        return this.salary * 0.15
    }

    showDetails(): void {
        super.showDetails()
        console.log(`Hours Worked : ${this.hoursWorked}`)
        console.log(`Hourly Rate : ${this.hourlyRate}`)
        console.log(`Salary : ${this.getSalary()}`)
        console.log(`Tax : ${this.calculateTax()}`)
    }
}
