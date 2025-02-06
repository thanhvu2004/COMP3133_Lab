const mongoose = require('mongoose');

const emailRegEx = /^\S+@\S+\.\S+$/
const cityRegEx = /^[a-zA-Z\s]+$/
const zipRegEx = /^\d{5}-\d{4}$/
const webRegEx = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
const phoneRegEx = /^1-\d{3}-\d{3}-\d{4}$/

//Create Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    maxLength: [50, "Name cannot be more than 50 characters"],
    trim: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    minLength: [5, "Username cannot be less than 5 characters"],    
    maxLength: [20, "Username cannot be more than 20 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    match: [emailRegEx, "Please enter a valid email"],
  },
  address: {
    street: {
      type: String,
      required: [true, "Street is required"],
    },
    suite: {
      type: String,
      required: [true, "Suite is required"],
    },
    city: {
      type: String,
        required: [true, "City is required"],
        match: [cityRegEx, "Please enter a valid city"],
    },
    zipcode: {
      type: String,
        required: [true, "Zipcode is required"],
        match: [zipRegEx, "Please enter a valid zipcode"],
        uppercase: true,
    },
    geo: {
      lat: {
        type: String,
        required: [true, "Latitude is required"],
      },
      lng: {
        type: String,
        required: [true, "Longitude is required"],
      },
    },
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    match: [phoneRegEx, "Please enter a valid phone number"],
  },
  website: {
    type: String,
    required: [true, "Website is required"],
    match: [webRegEx, "Please enter a valid website"],
  },
  company: {
    name: {
      type: String,
        required: [true, "Company name is required"],
    },
    catchPhrase: {
      type: String,
        required: [true, "Catch phrase is required"],
    },
    bs: {
      type: String,
        required: [true, "Business strategy is required"],
    },
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

UserSchema.pre("save", function (next) {
  const user = this;
  User.findOne({ email: user.email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      return next(new Error("User with this email already exists"));
    }
    const now = new Date();
    user.updatedAt = now;
    if (!user.createdAt) {
      user.createdAt = now;
    }
    next();
  });
});

const User = mongoose.model("User", UserSchema);
module.exports = User;