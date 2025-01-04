const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route to fetch clinic data
app.get("/api/clinics", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    // Filter and format
    const clinicData = response.data.map((clinic) => ({
      companyName: clinic.company.name,
      cLevelName: clinic.name,
      address: `${clinic.address.street}, ${clinic.address.city}, ${clinic.address.zipcode}`,
      email: clinic.email,
      phoneNumber: clinic.phone,
    }));

    res.status(200).json(clinicData);
  } catch (error) {
    console.error("Error fetching clinic data:", error.message);
    res.status(500).json({ message: "Failed to fetch clinic data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
