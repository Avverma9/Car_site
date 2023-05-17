import React, { useState, useEffect } from "react";
import "./Auction.css";

const CarAuction = () => {
  const [cars, setCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  useEffect(() => {
    // Fetch car data from API
    const fetchCars = async () => {
      const response = await fetch("https://cardata-d6kq.onrender.com/getall");
      const data = await response.json();
      setCars(data);
    };

    fetchCars();
  }, []);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const filteredCars = cars.filter(
    (car) => selectedBrand === "" || car.brand === selectedBrand
  );

  return (
    <>
      <div className="banner">
        <img
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"
          alt="Car auction banner"
        />
      </div>
      <div className="container">
      <div className="filter">
        <label>
          Select a brand:
          <select value={selectedBrand} onChange={handleBrandChange}>
            <option value="">All</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Ford">Ford</option>
            {/* Add more brand options here */}
          </select>
        </label>
      </div>
      </div>
      <div className="car-list">
        {filteredCars.map((car) => (
          <div className="car-card">
            <img src={car.images} alt={`${car.brand} ${car.model}`} />
            <div className="car-details">
              <h2>{`${car.brand} ${car.model}`}</h2>
              <p>{`Year: ${car.year}`}</p>
              <p>{`Mileage: ${car.mileage}`}</p>
              <p>{`Price: ${car.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarAuction;
