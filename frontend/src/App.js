import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [clinics, setClinics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

//Attention:

  // Replace https://clinic-finder-cwjj.onrender.com with http://localhost:5000 if you are running the backend locally
  
  const fetchClinics = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://clinic-finder-cwjj.onrender.com/api/clinics?page=${page}&limit=10`
      );
      setClinics((prevClinics) => [...prevClinics, ...response.data]);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch clinic data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClinics();
  }, [page]);

  // Load more clinics
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-6 shadow-lg">
        <h1 className="text-center text-3xl font-bold">Clinic Information</h1>
      </header>
      <main className="max-w-6xl mx-auto py-10">
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinics.map((clinic, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <h2 className="font-semibold text-lg text-indigo-600">
                {clinic.companyName}
              </h2>
              <p className="text-gray-700">
                <strong>Contact: </strong>
                {clinic.cLevelName}
              </p>
              <p className="text-gray-700">
                <strong>Address: </strong>
                {clinic.address}
              </p>
              <p className="text-gray-700">
                <strong>Email: </strong>
                {clinic.email}
              </p>
              <p className="text-gray-700">
                <strong>Phone: </strong>
                {clinic.phoneNumber || "N/A"}
              </p>
            </div>
          ))}
        </div>
        {loading ? (
          <p className="text-center text-indigo-600 mt-6">Loading....</p>
        ) : (
          <button
            onClick={loadMore}
            className="block mx-auto mt-10 bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition"
          >
            Load More
          </button>
        )}
      </main>
    </div>
  );
};

export default App;
