const { default: mongoose } = require("mongoose");

const donorSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
    postal_code: String,
    country: String,
  },
  {
    collation: "donor",
  }
);

module.exports = mongoose.model("Donor", donorSchema);
