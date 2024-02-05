import dotenv from "dotenv";
dotenv.config();
import { connect } from "mongoose";

const { DB_PASSWORD } = process.env;

const connectionString = `mongodb+srv://leorega:${DB_PASSWORD}@cluster0.z8jtlkz.mongodb.net/vivero?retryWrites=true&w=majority`;

connect(connectionString)
    .then(() => {
        console.log("DataBase Mongo connected");
    })
    .catch((error) => {
        console.error(error);
    });
