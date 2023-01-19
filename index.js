require("dotenv").config();

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const connectDB = require("./config/database");

const errorHandler = require("./middleware/errorHandler");

const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const investRoute = require("./routes/investRoute");
const newsRoute = require("./routes/newsRoute");
const hubungiRoute = require("./routes/hubungiRoute");

//connect to database
connectDB();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "https://vitalikbrokers.vercel.app", "https://www.vitalikbrokers.com"],
    credentials: true,
  })
);

//routes
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/invest", investRoute);
app.use("/api/news", newsRoute);
app.use("/api/contactus", hubungiRoute);

app.use("/", (req, res) => {
  res.send("welcome to vetalik brokers");
});

app.use(errorHandler);

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
