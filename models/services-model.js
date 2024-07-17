const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  image: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  fees: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const Services = new mongoose.model("Services", servicesSchema);
module.exports = Services;
