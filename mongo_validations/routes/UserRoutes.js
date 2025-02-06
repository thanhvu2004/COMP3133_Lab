const express = require('express');
const User = require('../models/User');
const app = express();

//http://localhost:8081/users
app.get('/users', async (req, res) => {
    const users = await User.find({});

    try {
        console.log(`user : ${JSON.stringify(users[0])}`) 
        console.log(`user's name : ${JSON.stringify(users[0].name)}`) 

        res.status(200).send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Express route for inserting a user
app.post('/insert', async (req, res) => {
    try {
        if (req.body) {
          const newUser = new User(req.body);
          console.log(`User to save o DB: ${JSON.stringify(newUser)}`);

          await newUser.save();
          res.status(201).json({
            message: "User created successfully",
            user: newUser,
          });
        } else {
          res.status(400).json({
            message: "User data is empty",
          });
        }
    } catch (err) {
      console.log(`Error while saving user: ${JSON.stringify(err)}`);
      res.status(400).json({error: err.message || err.toString()})
    }
});

module.exports = app;


const testObj = 
{
    "name": "John Doe",
    "username": "johndoe",
    "email": "john.doe@example.com",
    "address": {
      "street": "123 Main St",
      "suite": "Apt. 101",
      "city": "Toronto",
      "zipcode": "12345-6789",
      "geo": {
        "lat": "40.7128",
        "lng": "-74.0060"
      }
    },
    "phone": "1-123-456-7890",
    "website": "https://johndoe.com",
    "company": {
      "name": "Doe Inc.",
      "catchPhrase": "Innovating the Future",
      "bs": "Leading industry standards"
    }
}
  