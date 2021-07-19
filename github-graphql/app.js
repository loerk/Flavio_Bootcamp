const express = require("express");
const app = express();
const fetch = require("node-fetch");

app.use(express.static("public"));

// /data endpoint
app.get("/data", async (req, res) => {
  //define the GraphQL query in a string
  const query = `{ viewer { login } }`;
  //Store the GraphQL API endpoint in the url variable
  const url = "https://api.github.com/graphql";
  // object used to perform the connection to the server
  const options = {
    method: "post",
    headers: {
      "content-type": "application/json",
      authorization: "bearer " + process.env.APIKEY,
    },
    body: JSON.stringify({ query: query }),
  };

  let response;
  try {
    response = await fetch(url, options);
  } catch (err) {
    console.error(err);
  }
  const data = await response.json();
  console.log(data);
  // pass data obj to the client:
  res.json(data);
});

app.listen(3000, () => console.log("server ready"));
