import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBox = ({ activeTab }) => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({
      type: activeTab,
      location,
      propertyType,
      bedrooms,
      minPrice,
      maxPrice,
    });
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-wrap gap-2">
      {/* Location Search */}
      <div className="w-full md:flex-1">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Where do you want to live?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Property Type Dropdown */}
      <div className="w-full md:w-40">
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="w-full px-4 py-3 bg-white rounded-md border border-gray-200 appearance-none focus:outline-none focus:ring-1 focus:ring-green-500"
        >
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="villa">Villa</option>
        </select>
      </div>

      {/* Bedrooms Dropdown */}
      <div className="w-full md:w-32">
        <select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className="w-full px-4 py-3 bg-white rounded-md border border-gray-200 appearance-none focus:outline-none focus:ring-1 focus:ring-green-500"
        >
          <option value="">Bed</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4+</option>
        </select>
      </div>

      {/* Min Price Input */}
      <div className="w-full md:w-36">
        <input
          type="text"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full px-4 py-3 bg-white rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
      </div>

      {/* Max Price Input */}
      <div className="w-full md:w-36">
        <input
          type="text"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full px-4 py-3 bg-white rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
      </div>

      {/* Search Button */}
      <div className="w-full md:w-32">
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
