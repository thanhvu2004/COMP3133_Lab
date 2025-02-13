const { emailRegex } = require("../constants");
const Employee = require("../models/Employee");

// This file will contain all GraphQL Resolvers
exports.resolvers = {
  Query: {
    getEmployees: async () => {
      return await Employee.find();
    },
    getEmployeeByCity: async (parent, args) => {
      return await Employee.find({ city: new RegExp(args.city, "i") });
    },
    getEmployeeByFirstName: async (parent, args) => {
      return await Employee.find({
        firstname: new RegExp(args.firstName, "i"),
      });
    },
    getEmployeeByID: async (parent, args) => {
      return await Employee.findById(args.id);
    },
  },
  Mutation: {
    addEmployee: async (parent, args) => {
      //   const isValidEmail = emailRegex.test(args.email);
      //   if (!isValidEmail) {
      //     throw new Error("Invalid Email");
      //   }
      const newEmployee = new Employee({
        firstname: args.firstname,
        lastname: args.lastname,
        email: args.email,
        gender: args.gender.toLowerCase(),
        city: args.city,
        designation: args.designation,
        salary: args.salary,
      });
      return await newEmployee.save();
    },
    deleteEmployee: async (parent, args) => {
        if (!args.id) {
            console.log(`ID not provided`);
            return JSON.stringify({
            status: false,
            message: "Please provide Employee ID to delete",
            });
        }
        return await Employee.findByIdAndDelete(args.id);
    },
    updateEmployee: async (parent, args) => {
      if (!args.id) {
        console.log(`ID not provided`);
        return JSON.stringify({
          status: false,
          message: "Please provide Employee ID to update",
        });
      }

      console.log(`Trying to update employee id ${args.id}`);

      return await Employee.findOneAndUpdate(
        { _id: args.id },
        {
          $set: {
            firstname: args.firstname,
            lastname: args.lastname,
            gender: args.gender.toLowerCase(),
            city: args.city,
            designation: args.designation,
            salary: args.salary,
          },
        },
        { new: false },
        (err, employee) => {
          if (err) {
            console.log(`Could not update employee : ${JSON.stringify(err)}`);
            return null;
          } else {
            console.log(`Employee info updated : ${JSON.stringify(employee)}`);
            return employee;
          }
        }
      );
    },
  },
};
