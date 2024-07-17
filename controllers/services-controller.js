const Services = require("../models/services-model");

const servicesForm = async (req, res) => {
  try {
    const userData = await Services.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = servicesForm;
