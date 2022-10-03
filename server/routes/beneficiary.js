const express = require("express");
const beneficiaryRoute = express.Router();

let Beneficiary = require("../models/Beneficiary");

beneficiaryRoute.route("/add").post(function (req, res) {
  let { name, image, address, description, goal, longDescription } = req.body;

  let newBeneficiary = new Beneficiary();
  newBeneficiary.name = name;
  newBeneficiary.image = image;
  newBeneficiary.address = address;
  newBeneficiary.description = description;
  newBeneficiary.donation_goal = Number(goal);
  newBeneficiary.long_description = longDescription;
  newBeneficiary
    .save()
    .then((beneficiaryRes) => {
      res.send({
        status: "success",
        message: {
          beneficiary: beneficiaryRes,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({
        status: "error",
        message: "an error occured",
      });
    });
});

beneficiaryRoute.route("/get").get(function (req, res) {
  Beneficiary.find().then((response) => {
    res.send({
      beneficiaries: response,
    });
  });
});

beneficiaryRoute.route("/donate").put(function (req, res) {
  let { _id, donation } = req.body;

  Beneficiary.findById(_id, function (err, beneficiary) {
    beneficiary.curren_donation = beneficiary.curren_donation + donation;
    beneficiary.save().then((newBene) => {
      res.send(newBene);
    });
  });
});

module.exports = beneficiaryRoute;
