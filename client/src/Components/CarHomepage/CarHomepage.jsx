import React, { useState } from "react";

import { useLocation } from "react-router-dom";

const Homepage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("newCar");
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearch = () => {
    // Perform search based on the selected options
    console.log("Searching...");
  };

  if (location.pathname !== "/") {
    return null;
  }
  return (
    <>
      <div className="homepage">
        <div className="card">
          <div className="card-content">
            <h2>Find Your Right Car</h2>
            <div className="tab-container">
              <button
                className={`tab-button ${
                  activeTab === "newCar" ? "active" : ""
                }`}
                onClick={() => handleTabChange("newCar")}
              >
                New Car
              </button>
              <button
                className={`tab-button ${
                  activeTab === "usedCar" ? "active" : ""
                }`}
                onClick={() => handleTabChange("usedCar")}
              >
                Used Car
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter keyword"
              value={searchKeyword}
              onChange={handleSearchKeywordChange}
              className="form-input"
            />
            <input
              type="text"
              placeholder="Select"
              value={searchKeyword}
              onChange={handleSearchKeywordChange}
              className="form-input"
            />
            <br />
            <br />
            <button onClick={handleSearch} className="search-button">
              Search
            </button>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Homepage;
