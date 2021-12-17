const dboperations = require("./dboperations");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.route("/addresses").get((request, response) => {
  dboperations.getAddresses().then((result) => {
    response.json(result[0]);
  });
});

router.route("/addresses/:id").get((request, response) => {
  dboperations.getAddress(request.params.id).then((result) => {
    response.json(result[0]);
  });
});

router.route("/addresses").post((request, response) => {
  let address = { ...request.body };

  dboperations.addAddress(address).then((result) => {
    response.status(201).json(result[0]);
  });
});

router.route("/addresses/:id").put((request, response) => {
  let address = { ...request.body };

  dboperations.editAddress(address).then((result) => {
    response.status(201).json(result[0]);
  });
});

router.route("/addresses/:id").delete((request, response) => {
  dboperations.deleteAddress(request.params.id).then((result) => {
    response.status(200).json(result[0]);
  });
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log("Addresses API is running at " + port);

dboperations.getAddresses().then((result) => {
  console.log(result);
});
