const { default: mongoose } = require("mongoose");

const beneficiarySchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    image: String,
    description: String,
    curren_donation: {
      type: Number,
      default: 0,
    },
    long_description: String,
    donation_goal: {
      type: Number,
      default: 100000,
    },
  },
  {
    collection: "beneficiary",
  }
);

module.exports = mongoose.model("Beneficiary", beneficiarySchema);
