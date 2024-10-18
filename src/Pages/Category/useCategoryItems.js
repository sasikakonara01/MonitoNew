// useCategoryItem.js
import { useEffect, useState } from "react";
import usePetSectionLand from "../../Components/LandingPage/PetSection/usePetSectionLand";

const useCategoryItem = (filters) => {
  const { petData, isLoading } = usePetSectionLand();
  const [filteredPetData, setFilteredPetData] = useState([]);

  useEffect(() => {
    if (petData) {
      const filteredData = filterPetData(petData);
      setFilteredPetData(filteredData);
    }
  }, [petData, filters]); // Rerun when petData or filters change

  // Function to filter petData based on selected filters
  const filterPetData = (data) => {
    return data.filter((item) => {
      const { gender, color, price, breed } = item;

      const matchesGender =
        !filters.gender.length || filters.gender.includes(gender);
      const matchesColor =
        !filters.color.length || filters.color.includes(color);
      const matchesPrice =
        (filters.price.min === "" || price >= filters.price.min) &&
        (filters.price.max === "" || price <= filters.price.max);
      const matchesBreed =
        !filters.breed.length || filters.breed.includes(breed);

      return matchesGender && matchesColor && matchesPrice && matchesBreed;
    });
  };

  return { filteredPetData, isLoading };
};

export default useCategoryItem;
