import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../../src/styles.css";

const ClinicList = () => {
  const [clinics, setClinics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Current page
  const [hasMore, setHasMore] = useState(true); // Check if more data is available

  const fetchClinics = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/clinics", {
        params: { page, limit: 10 },
      });
      if (response.data.length === 0) {
        setHasMore(false);
      } else {
        setClinics((prevClinics) => [...prevClinics, ...response.data]);
      }
    } catch (err) {
      setError("Failed to load clinics.");
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchClinics();
  }, [fetchClinics]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 &&
      hasMore &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="clinic-list">
      <h1>Clinics in the United States</h1>
      {clinics.map((clinic) => (
        <div key={clinic.id} className="clinic-card">
          <h2 className="font-semibold text-lg">{clinic.companyName}</h2>
          <p>{clinic.cLevelName}</p>
          <p>{clinic.address}</p>
          <p>{clinic.email}</p>
          <p>{clinic.phoneNumber || "N/A"}</p>
        </div>
      ))}
      {loading && <p>Loading more clinics...</p>}
    </div>
  );
};

export default ClinicList;
