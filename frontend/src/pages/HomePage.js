import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    // Check if clinics data exists in local storage
    const storedClinics = localStorage.getItem("clinics");
    if (storedClinics) {
      try {
        const parsedClinics = JSON.parse(storedClinics);
        if (Array.isArray(parsedClinics)) {
          setClinics(parsedClinics); // Set clinics if it's an array
        } else {
          console.error("Stored clinics is not an array");
          setClinics([]); // Default to an empty array if the structure is invalid
        }
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        setClinics([]);
      }
    } else {
      // Fetch clinics data from the backend
      const fetchClinics = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/clinics");
          const data = await response.json();

          if (Array.isArray(data)) {
            setClinics(data);
            localStorage.setItem("clinics", JSON.stringify(data));
          } else {
            console.error("API response is not an array");
          }
        } catch (error) {
          console.error("Failed to fetch clinics:", error);
        }
      };
      fetchClinics();
    }
  }, []);

  // Filter clinics by country
  const unitedStatesClinics = clinics.filter(
    (clinic) => clinic.country === "United States"
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clinics in the United States</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {unitedStatesClinics.length > 0 ? (
          unitedStatesClinics.map((clinic, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md p-4 bg-white"
            >
              <h2 className="font-semibold text-lg">{clinic.companyName}</h2>
              <p>{clinic.cLevelName}</p>
              <p>{clinic.address}</p>
              <p>{clinic.email}</p>
              <p>{clinic.phoneNumber || "N/A"}</p>
            </div>
          ))
        ) : (
          <p>No clinics available in the United States.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
