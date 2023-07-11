const express = require("express");
const cors = require("cors");
const databaseConfiguration = require("./config/database.js");
const todo = require("./routers/routes.js");
const path = require("path")
const buildPath = path.join(__dirname , "../client/build")

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(buildPath))

databaseConfiguration();

app.use(cors({ origin: true, credentials: true }));


app.use(express.json({ extended: false }));

app.get("/", (req, res) =>{

res.sendFile(
  path.join(__dirname, "../client/build/index.html"),
  function(err) {
    if (err) {
      res.status(500).send(err)
    }
  }
)
}
  // res.send("Hello there!! Cheers !! The server is up and running")
);


app.use("/api/todoapp", todo);


app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);