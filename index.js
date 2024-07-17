require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT;
const authRoute = require("./router/auth-router");
const connectDB = require("./utils/db");
const contactRoute = require("./router/contact-router");
const servicesRoute = require("./router/services-router");
const blogRoute = require("./router/blog-router");

const corsOption = {
  origin: "https://www.awadhkm.com.np",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  Credentials: true,
};

app.use(cors.apply(corsOption));
app.use(express.json());

app.use("/api/auth", authRoute);

app.use("/api/form", contactRoute);

app.use("/api/data", servicesRoute);

app.use("/api/data", blogRoute);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
