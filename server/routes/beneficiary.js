const express = require('express');
const beneficiaryRoute = express.Router()

let Beneficiary = require("../models/Beneficiary")

beneficiaryRoute.route("/add").post(function (req, res) {

    let { name, image, address, description } = req.body;

    let newBeneficiary = new Beneficiary()
    newBeneficiary.name = name;
    newBeneficiary.image = image;
    newBeneficiary.address = address;
    newBeneficiary.description = description;
    newBeneficiary.save().then((beneficiaryRes) => {
        res.send({
            status: "success",
            message: {
                beneficiary: beneficiaryRes
            }
        })
    }).catch(err => {
        res.send({
            status: "error",
            message: "an error occured"
        })
    })
})

beneficiaryRoute.route("/get").get(function(req,res){
    Beneficiary.find().then((response)=>{
        res.send({
            beneficiaries:response
        })
    })
})

module.exports = beneficiaryRoute