import dotenv from "dotenv";
import {Sequelize} from "sequelize";

dotenv.config();

const sequelize = new Sequelize(
    <string>process.env.DATABASE,
    <string>process.env.USERNAME,
    process.env.PASSWORD,
    {
        host: "host.docker.internal",
        dialect: "mysql",
    }
);

sequelize.sync()
    .catch((err) => {
        console.log("sync error", err);
    });

export {sequelize};
