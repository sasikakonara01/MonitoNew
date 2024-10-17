import React, { useState, useEffect } from "react";
import { get_pets_data_api } from "../../../Services/PetDataApi";

function useLandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [petData, setPetData] = useState([]);

  const fetchpetsData = async () => {
    console.log("called");
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

  //Fetch data on component mount
  useEffect(() => {
    fetchpetsData();
  }, []);

  return { petData, isLoading, fetchpetsData };
}

export default useLandingPage;
