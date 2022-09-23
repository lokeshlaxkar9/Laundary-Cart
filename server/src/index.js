const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const appRoutes = require("./routes/appRoutes");
const orderRouter = require("./routes/orderRoutes");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    "mongodb+srv://lokeshlaxkar9:NC4yVhUgsBgdMX8A@cluster0.el3mzea.mongodb.net/Laundary-App?retryWrites=true&w=majority"
  );
  console.log("Mongoose Connected");
}
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(appRoutes);
app.use(authRoutes);
app.use(orderRouter);

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Some Error Occurred" } = err;
  res.status(status).send(message);
});

app.listen(PORT, () => {
  console.log(`Server is Up at ${PORT}`);
});
