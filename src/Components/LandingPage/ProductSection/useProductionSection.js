import React, { useState, useEffect } from "react";
import { get_products_data_api } from "../../../Services/ProductDataApi";

function useProductionSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState([]);

  const fetchProductsData = async () => {
    try {
      setIsLoading(true);
      const response = await get_products_data_api();
      setProductData(response);
    } catch (error) {
      console.error("Error fetching pets:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchProductsData();
  }, []);

  return { productData, isLoading };
}

export default useProductionSection;
