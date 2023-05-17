import React, { useState } from 'react';
import './Homepage.css';
import { useLocation } from 'react-router-dom';


const Homepage = () => {
    const location= useLocation()
  const [activeTab, setActiveTab] = useState('newCar');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [carPriceAvailable, setCarPriceAvailable] = useState(true);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleCarNumberChange = (event) => {
    setCarNumber(event.target.value);
  };

  const handleSearch = () => {
    // Perform search based on the selected options
    console.log('Searching...');
  };

 
  const handleGetCarPrice = () => {
    // Simulated logic to check if car details are available
    // Replace this with your actual logic to determine car details availability
    const carDetailsAvailable = false;
    setCarPriceAvailable(carDetailsAvailable);
  };
  const handleGetAllCars = () => {
    // Get all available cars
    console.log('Getting all cars...');
  };
  if (location.pathname !== '/sell') {
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
              className={`tab-button ${activeTab === 'newCar' ? 'active' : ''}`}
              onClick={() => handleTabChange('newCar')}
            >
              New Car
            </button>
            <button
              className={`tab-button ${activeTab === 'usedCar' ? 'active' : ''}`}
              onClick={() => handleTabChange('usedCar')}
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

      <div className="card">
        <div className="card-content">
          <h2>Enter Your Car Number</h2>
          <input
            type="text"
            placeholder="Enter car number"
            value={carNumber}
            onChange={handleCarNumberChange}
            className="form-input"
          />
          <button onClick={handleGetCarPrice} className="search-button">
            Get Car Price
          </button>
          {!carPriceAvailable && (
              <p className="unavailable-message">
                Sorry, this car's details are not available.
              </p>
          )}
        <br />
        <br />
          <img
  src="https://purepng.com/public/uploads/large/purepng.com-bmw-car-logologocar-brand-logoscarsbmw-car-logo-1701527428054l1xd2.png"
  alt="logo"
  style={{ width: '50px', height: 'auto' }}
/>

<img
  src="https://w7.pngwing.com/pngs/26/42/png-transparent-honda-logo-car-honda-hr-v-honda-freed-honda.png"
  alt="logo"
  style={{ width: '50px', height: 'auto' }}
/>

<img
  src="https://e7.pngegg.com/pngimages/531/7/png-clipart-suzuki-car-logo-cdr-suzuki-logo-angle-text.png"
  alt="logo"
  style={{ width: '50px', height: 'auto' }}
/>
<br />
<img
  src="https://summitsoft.com/wp-content/uploads/2016/07/Bentley-logo.jpg"
  alt="logo"
  style={{ width: '50px', height: 'auto' }}
/>
<img
  src="https://im.rediff.com/money/2011/sep/21car2.jpg"
  alt="logo"
  style={{ width: '50px', height: 'auto' }}
/>

<img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreI1qboFuhBayHb7E-ZhN3yXq13d1TQtvaw&usqp=CAU"
  alt="logo"
  style={{ width: '50px', height: 'auto' }}
/>


<button onClick={handleGetAllCars} className="search-button">
            View All Cars
          </button>
         
        </div>
      </div>
    
           
          
    </div>
    </>
  );
};

export default Homepage;
