import {DataTypes} from "sequelize";
import {sequelize} from "../database";

export const User = sequelize.define("users", {
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
    },
}, {
    createdAt: false,
    updatedAt: false,
});
