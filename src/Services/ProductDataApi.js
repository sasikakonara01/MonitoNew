import axios from "axios";

export const get_product_data_api = async () => {
  try {
    const response = await axios.get(
      `https://monitor-backend-rust.vercel.app/api/products`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching pet data:", error.message);
    throw new Error("Failed to retrieve pet data. Please try again later.");
  }
};
