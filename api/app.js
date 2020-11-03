var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
 var cors = require("cors");
var app = express();

app.use(bodyParser.json());
app.use(express.static("images"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

routes(app);

var server = app.listen(3000, function() {
  console.log("app running on port.", server.address().port);
});
