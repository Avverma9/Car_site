import React, { useState } from "react";
import "./BuyPage.css";
import { BsSearch } from "react-icons/bs";

const Buypage = () => {
  const [cars, setCars] = useState([]);
  const [searchBrand, setSearchBrand] = useState("");

  const fetchCars = async () => {
    try {
      const response = await fetch("http://localhost:5000/getall");
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  const handleClick = () => {
    fetchCars();
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/${searchBrand}`
      );
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error("Error searching for cars:", error);
    }
  };

  const handleChange = (e) => {
    setSearchBrand(e.target.value);
  };

  return (
    <div className="homepage-buy">
      <div className="image-container-buy">
        <img
          src="https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1684303001064-Untitled.jpg"
          alt="Main Image"
          className="main-image-buy"
        />
      </div>

      <div className="search-container-buy">
        <input
          type="text"
          placeholder="Search Your favourite Brand"
          className="search-input-buy"
          value={searchBrand}
          onChange={handleChange}
        />
        <button className="search-button-buy" onClick={handleSearch}>
          <BsSearch /> Search
        </button>
      </div>

      <button onClick={handleClick} className="view-all-cars-button">
        View All Cars
      </button>

      <div className="car-cards-container">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.images} alt={car.model} className="car-image" />
            <div className="car-details">
              <h4 className="car-model">{car.model}</h4>
              <div className="car-info">
                <p className="car-info-item">Year: {car.year}</p>
                <p className="car-info-item">Body Type: {car.bodytype}</p>
                <p className="car-info-item">Fuel Type: {car.fueltype}</p>
                <p className="car-info-item">Price: {car.price}</p>
                <p className="car-info-item">Mileage: {car.mileage}</p>
              </div>
              <div className="buy-button">
                <a href="/cart">Buy this car</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buypage;
