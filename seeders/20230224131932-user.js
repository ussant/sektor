"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
    async up (queryInterface) {
        return queryInterface.bulkInsert("users", [
            {first_name: "Emily", last_name: "Parker", email: "parker@gmail.com", gender: "female", hashed_password: bcrypt.hashSync("parker", 7), photo: "parker.png", registration_date: new Date()},
            {first_name: "Ethan", last_name: "Thomas", email: "thomas@gmail.com", gender: "male", hashed_password: bcrypt.hashSync("thomas", 7), photo: "thomas.png", registration_date: new Date()},
            {first_name: "Jasmine", last_name: "Rodriguez", email: "jasmine@gmail.com", gender: "female", hashed_password: bcrypt.hashSync("jasmine", 7), photo: "jasmine.jpg", registration_date: new Date()},
            {first_name: "Ava", last_name: "Gonzalez", email: "gonzales@gmail.com", gender: "female", hashed_password: bcrypt.hashSync("gonzales", 7), photo: "gonzales.jpg", registration_date: new Date()},
            {first_name: "Daniel", last_name: "Martinez", email: "martinez@gmail.com", gender: "male", hashed_password: bcrypt.hashSync("martinez", 7), photo: "martinez.jpg", registration_date: new Date()},
            {first_name: "David", last_name: "Hernandez", email: "hernandez@gmail.com", gender: "male", hashed_password: bcrypt.hashSync("hernandez", 7), photo: "hernandez.png", registration_date: new Date()},
            {first_name: "Michael", last_name: "Johnson", email: "johnson@gmail.com", gender: "male", hashed_password: bcrypt.hashSync("johnson", 7), photo: "johnson.jpg", registration_date: new Date()},
            {first_name: "Maya", last_name: "Taylor", email: "taylor@gmail.com", gender: "female", hashed_password: bcrypt.hashSync("taylor", 7), photo: "taylor.png", registration_date: new Date()},
            {first_name: "Jonathan", last_name: "Martin", email: "martin@gmail.com", gender: "male", hashed_password: bcrypt.hashSync("martin", 7), photo: "martin.jpg", registration_date: new Date()},
            {first_name: "Zoey", last_name: "Wilson", email: "wilson@gmail.com", gender: "male", hashed_password: bcrypt.hashSync("wilson", 7), photo: "wilson.jpg", registration_date: new Date()},
        ]);
    },

    async down (queryInterface, Sequelize) {
        //
    }
};
