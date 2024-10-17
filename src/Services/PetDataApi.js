import axios from "axios";

// Use environment variables to construct the API URL
const BASE_URL = process.env.REACT_APP_API_BASEURL;
const SUBLINK = process.env.REACT_APP_API_SUBLINK;

export const get_pets_data_api = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${SUBLINK}/pets`);
    console.log(response.data, BASE_URL, "base");
    return response.data;
  } catch (error) {
    console.error("Error fetching pet data:", error.message);
    throw new Error("Failed to retrieve pet data. Please try again later.");
  }
};
