const { default: mongoose, Schema } = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    donor: {
      type: Schema.Types.ObjectId,
      ref: "Donor",
    },
    beneficiary: {
      type: Schema.Types.ObjectId,
      ref: "beneficiary",
    },
    donation_amount: Number,
  },
  {
    collation: "donations",
  }
);

module.exports = mongoose.model("Donation", donationSchema);
