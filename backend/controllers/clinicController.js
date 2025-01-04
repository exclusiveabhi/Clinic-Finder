const axios = require("axios");

const getClinics = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.sampleapis.com/healthcare/clinics"
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch clinic data" });
  }
};

module.exports = { getClinics };
