const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require("./routes/html")(app);
require("./routes/api")(app);

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", {
  useNewUrlParser: true,
  useFindAndModify: false
});


app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
