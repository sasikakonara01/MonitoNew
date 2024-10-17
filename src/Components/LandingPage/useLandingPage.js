import React, { useState, useEffect } from "react";
import { get_pets_data_api } from "../../Services/PetDataApi";

function useLandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [petData, setPetData] = useState([]);

  const fetchpetsData = async () => {
    try {
      setIsLoading(true);
      const response = await get_pets_data_api();
      setPetData(response);
    } catch (error) {
      console.error("Error fetching pets:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchpetsData();
  }, []); // Empty dependency array ensures this only runs on mount

  return { petData, isLoading };
}

export default useLandingPage;
