import React, { useState } from "react";
import "./BuyPage.css";
import { BsSearch } from "react-icons/bs";

const Buypage = () => {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    try {
      const response = await fetch("https://cardata-d6kq.onrender.com/getall");
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  const handleClick = () => {
    fetchCars();
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
        />
        <button className="search-button-buy">
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
              <h4>{car.model}</h4>
              <p>Year: {car.year}</p>
              <p>Body Type: {car.bodytype}</p>
              <p>Fuel Type: {car.fueltype}</p>
              <p>Price: {car.price}</p>
              <p>Mileage: {car.mileage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buypage;
