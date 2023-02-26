"use strict";
const {DataTypes} = require("sequelize");

module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable("users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            gender: {
                type: DataTypes.ENUM("male", "female"),
            },
            photo: {
                type: DataTypes.STRING,
            },
            registration_date: {
                type: DataTypes.DATE,
            },
            hashed_password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable("users");
    }
};
