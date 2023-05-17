/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import './CarHomepage.css'

import { useLocation } from "react-router-dom";

const CarHomepage = () => {
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
      </div>
      <div>
        <img className="home-img" src="https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1684328689755-Untitled.jpg" alt="home-image" />
      </div>
      <div className="ch-1">
        <span style={{ marginRight: '10px' }} color="blue">Enter your car registration</span>
        <button >Get a call from us</button>
      </div>
      
      {/* Car Containers */}
      
      <div className="Model">
        <img src="https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1684344437410-Untitled.png" alt="" />
      </div>
         
      <div className="car-container">
        {/* First Car Container */}
        
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Flying%20SpurModelImage.jpg&w=350&h=251&q=90&c=1" alt="Car 1" />
          <h3>BMW 2S</h3>
          <p>Price: $10,000</p>
          <div className="cardetails">
            <a href="#">Check May Offers</a>
          </div>
        </div>
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-X1-110520231412.jpg&w=350&h=251&q=90&c=1" alt="Car 2" />
          <h3>BMW X1</h3>
          <p>Price: $15,000</p>
          <div className="cardetails">
            <a href="#">Check May Offers</a>
          </div>
        </div>
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/X5ModelImage.jpg&w=350&h=251&q=90&c=1" alt="Car 3" />
          <h3>BMW X5</h3>
          <p>Price: $20,000</p>
          <div className="cardetails">
            <a href="#">Check May Offers</a>
          </div>
        </div>
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-iX-130120221324.jpg&w=350&h=251&q=90&c=1" alt="Car 4" />
          <h3>BMW iX</h3>
          <p>Price: $25,000</p>
          <div className="cardetails">
            <a href="#">Check May Offers</a>
          </div>
        </div>
      </div>
      <h2>Latest Cars</h2> 
      <div className="car-container">
        {/* Second Car Container */}
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-4-Series-Coupe-150320221138.jpg&w=350&h=251&q=90&c=1" alt="Car 5" />
          <h3>BMW 4S</h3>
          <p>Price: $30,000</p>
          <div className="cardetails">
            <a href="#">Check May Offers</a>
          </div>
        </div>
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-8-Series-Coupe-271220221219.jpg&w=350&h=251&q=90&c=1" alt="Car 6" />
          <h3>BMW 8S</h3>
          <p>Price: $35,000</p>
          <div className="cardetails">
            <a href="#">Check May Offers</a>
          </div>
        </div>
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Jaguar-F-Type-301120201428.jpg&w=350&h=251&q=90&c=1" alt="Car 7" />
          <h3>JaguarF</h3>
          <p>Price: $40,000</p>
          <div className="cardetails">
            <a href="#">Check May Offers</a>
          </div>
        </div>
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Jaguar-I-Pace-231120211747.jpg&w=350&h=251&q=90&c=1" alt="Car 8" />
          <h3>Jaguar I-Pace</h3>
          <p>Price: $45,000</p>
          <div className="cardetails">
            <a href="#">Check May Offers</a>
          </div>
          
        </div>
        
      </div>
      <div className="third-car">
      {/* 3rd Car Containers */}
      <h2>Upcoming Cars </h2> 
      <div className="car-container">
        {/* First Car Container */}
        
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Flying%20SpurModelImage.jpg&w=350&h=251&q=90&c=1" alt="Car 1" />
          <h3>BMW 2S</h3>
          <p>Price: $10,000</p>
          <div className="cardetails">
            <a href="#">Alert Me When Launched</a>
          </div>
        </div>
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-X1-110520231412.jpg&w=350&h=251&q=90&c=1" alt="Car 2" />
          <h3>BMW X1</h3>
          <p>Price: $15,000</p>
          <div className="cardetails">
            <a href="#">Alert Me When Launched</a>
          </div>
        </div>
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/X5ModelImage.jpg&w=350&h=251&q=90&c=1" alt="Car 3" />
          <h3>BMW X5</h3>
          <p>Price: $20,000</p>
          <div className="cardetails">
            <a href="#">Alert Me When Launched</a>
          </div>
        </div>
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-iX-130120221324.jpg&w=350&h=251&q=90&c=1" alt="Car 4" />
          <h3>BMW iX</h3>
          <p>Price: $25,000</p>
          <div className="cardetails">
            <a href="#">Alert Me When Launched</a>
          </div>
        </div>
        <div className="viewAlls">
        <a href="#">View All Latest Cars</a>
      </div>
        </div>
      </div >
       
      <div className="fourth-car">
     <div className="Model">
<img src="https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1684345120920-Untitled.png" alt="" />
      </div>
      <div className="car-container">
        {/* Second Car Container */}
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-4-Series-Coupe-150320221138.jpg&w=350&h=251&q=90&c=1" alt="Car 5" />
          <h3>BMW 4S</h3>
          <p>Price: $30,000</p>
          <div className="cardetails">
            <a href="#">View Offers</a>
          </div>
        </div>
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-8-Series-Coupe-271220221219.jpg&w=350&h=251&q=90&c=1" alt="Car 6" />
          <h3>BMW 8S</h3>
          <p>Price: $35,000</p>
          <div className="cardetails">
            <a href="#">View Offers</a>
          </div>
        </div>
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Jaguar-F-Type-301120201428.jpg&w=350&h=251&q=90&c=1" alt="Car 7" />
          <h3>JaguarF</h3>
          <p>Price: $40,000</p>
          <div className="cardetails">
            <a href="#">View Offers</a>
          </div>
        </div>
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Jaguar-I-Pace-231120211747.jpg&w=350&h=251&q=90&c=1" alt="Car 8" />
          <h3>Jaguar I-Pace</h3>
          <p>Price: $45,000</p>
          <div className="cardetails">
            <a href="#">View Offers</a>
          </div>
          
        </div>
        </div>
      </div>
      <div></div>
      {/* Car Containers */}
     <div className="fifth-car">
      <img src="https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1684346468699-Untitled.png" alt="" />
     </div>
      <div className="car-container">
        {/* First Car Container */}
        
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Flying%20SpurModelImage.jpg&w=350&h=251&q=90&c=1" alt="Car 1" />
          <h3>BMW 2S</h3>
          <p>Price: $10,000</p>
          <p>204 Available Cars</p>
        </div>
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-X1-110520231412.jpg&w=350&h=251&q=90&c=1" alt="Car 2" />
          <h3>BMW X1</h3>
          <p>Price: $15,000</p>
          <p>37 Available Cars</p>
        </div>
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/X5ModelImage.jpg&w=350&h=251&q=90&c=1" alt="Car 3" />
          <h3>BMW X5</h3>
          <p>Price: $20,000</p>
          <p>25 Available Cars</p>
        </div>
        <div className="car">
          <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-iX-130120221324.jpg&w=350&h=251&q=90&c=1" alt="Car 4" />
          <h3>BMW iX</h3>
          <p>Price: $25,000</p>
          <p>104 Available Cars</p>
        </div>
      </div>
     
      
      <div className="viewAll">
        <a href="#">View All Latest Cars</a>
      </div>
      <div className="viewAllss">
        <a href="#">View All Latest Cars</a>
      </div>
      <div className="viewAllsss">
        <a href="#">View All Latest Cars</a>
      </div>
    </>
    
  );
};

export default CarHomepage;
