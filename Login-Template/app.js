const express = require("express");
const app = express();
app.set("view engine", "pug");

//GET / endpoint that serves the “signup” template.
app.get("/", (req, res) => res.render("signup"));
//start server
app.listen(3001, () => console.log("Server ready"));

//POST /register endpoint that will receive the email and password data from the request body
app.post("/register", async (req, res) => {
  const { email, body } = req.body;
});
//middleware to process the urlencoded data sent from the form
app.use(express.urlencoded({ extended: true }));
