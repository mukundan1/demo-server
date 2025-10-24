require("dotenv").config();
const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

app.use(cors({ origin: "*"}));

app.use("/todo", todoRoutes);
app.use("/users", authRoutes);
app.get("/", (req, res) => res.status(200).send({ message: "Todo App is up and running" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;