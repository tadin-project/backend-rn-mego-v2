import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { Sequelize } from "sequelize";

const app = express();

dotenv.config();

const port = process.env.PORT || 5000;
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
  app.listen(port, () => console.log(`Server is running on port ${port}`));
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
