import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleClick = (category) => {
    console.log("New category clicked")
    setSelectedCategory(category);
    onCategoryChange(category);

  }

  return (
    <div className="categories">
      {categories.map(category => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
      <h5>Category filters</h5>

    </div>
  );
}

export default CategoryFilter;
