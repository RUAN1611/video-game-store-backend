const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

dotenv.config({
  path: "./config.env",
});

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:8000",
      "http://localhost:4200",
      "https://localhost:8000",
      "https://localhost:4200",
    ],
  })
);

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection database is successful!");
  })
  .catch((err) => {
    console.log(`Database connection failed. ERROR ${err}`);
  });

// Routes
const customerRoutes = require("./routes/customerRoutes");
const cityRoutes = require("./routes/cityRoutes");
const gameCategoryRoutes = require("./routes/gameCategoryRoutes");
const gameRoutes = require("./routes/gameRoutes");

app.use("/api/customers", customerRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/game-categories", gameCategoryRoutes);
app.use("/api/games", gameRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
