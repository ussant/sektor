import dotenv from "dotenv";
import bodyParser from "body-parser";
import {graphqlHTTP} from "express-graphql";
import express, {type Express} from "express";
import gqlPlayground from "graphql-playground-middleware-express";
import {sequelize} from "./database";
import {schema} from "./graphql/schema";
import {queries} from "./graphql/queries";
import {mutations} from "./graphql/mutations";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

const resolvers = {...queries, ...mutations};

app.use("/graphql",
    graphqlHTTP(req => ({
        schema,
        rootValue: resolvers,
        context: {
            headers: req.headers,
        },
    })));

app.use("/", gqlPlayground({ endpoint: "/graphql" }));

sequelize.authenticate()
    .then(() => {
        app.listen(port, () => {
            console.log(`server running at http://127.0.0.1:${port}`);
        });
    }).catch(err => {
        console.error("unable to connect to the database: ", err);
    });
