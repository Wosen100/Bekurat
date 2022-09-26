const { default: mongoose } = require("mongoose");

const beneficiarySchema = new mongoose.Schema({
    name:String,
    address:String,
    image:String,
    description:String,
},{
    collection:"beneficiary"
})

module.exports = mongoose.model("Beneficiary", beneficiarySchema)