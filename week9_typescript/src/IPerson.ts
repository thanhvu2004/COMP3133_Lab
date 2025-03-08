//Interface is a contract that defines the properties and methods that a class must implement
//Interface is a blueprint for a class
export default interface IPerson {
    firstName: string;
    lastName: string;

    // interface methods cannot have implementation
    //it can only have method signature
    // showInfo() : void{
    //     console.log();
    // };
}

//export can be used to export a single class, interface, function, or variable

export var college_name = "ABC College"