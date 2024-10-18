import { useState } from "react";

const useCategory = () => {
  const [filters, setFilters] = useState({
    price: { min: "", max: "" },
    gender: [],
    color: [],
    breed: [],
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev); // Toggle the filter visibility
  };

  const handleGenderChange = (event) => {
    const { value, checked } = event.target;
    setFilters((prev) => {
      const genderList = checked
        ? [...prev.gender, value]
        : prev.gender.filter((g) => g !== value);
      return { ...prev, gender: genderList };
    });
  };

  const handleColorChange = (event) => {
    const { value, checked } = event.target;
    setFilters((prev) => {
      const colorList = checked
        ? [...prev.color, value]
        : prev.color.filter((c) => c !== value);
      return { ...prev, color: colorList };
    });
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({
      ...prev,
      price: {
        ...prev.price,
        [name]: Number(value), // Convert to number
      },
    }));
  };

  const handleBreedChange = (event) => {
    const { value, checked } = event.target;
    setFilters((prev) => {
      const breedList = checked
        ? [...prev.breed, value]
        : prev.breed.filter((b) => b !== value);
      return { ...prev, breed: breedList };
    });
  };

  return {
    handleBreedChange,
    handlePriceChange,
    handleGenderChange,
    handleColorChange,
    toggleFilter,
    isFilterOpen,
    filters,
  };
};

export default useCategory;
