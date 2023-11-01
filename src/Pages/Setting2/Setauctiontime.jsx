import React, { useState, useEffect } from "react";
// import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import style from "./Startprice.module.css";
import { BiEdit } from "react-icons/bi";
import DataTable from "react-data-table-component";

function Setauctiontime() {
  const BASE_URL = "http://13.48.45.18:4008";

  const [regions, setRegions] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectTime, setSelectTime] = useState(null);
  const [interval, setTimeInterval] = useState("");
  const [auctions, setAuctions] = useState([]);

  //Date and time 
  const [editedStartDate, setEditedStartDate] = useState(null);
  const [editedStartTime, setEditedStartTime] = useState(null);

  const currentAuction = JSON.parse(localStorage.getItem("currentAuction"));
  // console.log(currentAuction, "AUCTION ID")

  // REGION
  useEffect(() => {
    fetch("http://13.48.45.18:4008/admin/region/getAll")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setRegions(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching regions:", error);
      });
  }, []);

  // SELLER
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (selectedRegion) {
      fetch(`${BASE_URL}/admin/seller/getByRegion/${selectedRegion.value}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.data) {
            let allSellerOptions = [];

            data.data.forEach((auction) => {
              if (auction.seller && auction.seller.length > 0) {
                const sellersData = auction.seller;
                const sellerOptions = sellersData.map((seller) => ({
                  value: seller._id,
                  label: seller.name,
                }));
                allSellerOptions = allSellerOptions.concat(sellerOptions);
              }
            });
            setSellers(allSellerOptions);
          }
        })
        .catch((error) => {
          console.error("Error fetching sellers:", error);
        });
    }
  }, [selectedRegion]);

  const selectRegionOptions = regions.map((region) => ({
    value: region._id,
    label: region.name,
  }));

  //Fetch Auction
  const fetchAuctionsBySeller = async () => {
    if (selectedSeller) {
      try {
        const response = await fetch(
          `http://13.48.45.18:4008/admin/auction/getBySeller/${selectedSeller.value}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const { data } = await response.json();
        setAuctions(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (selectedSeller) {
      fetchAuctionsBySeller();
    }
  }, [selectedSeller]);


  const handleTimeIntervalChange = (e) => {
    setTimeInterval(e.target.value);
  }



  const handleRegionChange = (selectedOption) => {
    setSelectedRegion(selectedOption);
    setSelectedSeller(null);
  };

  const handleSellerChange = (selectedOption) => {
    setSelectedSeller(selectedOption);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectTime(time);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const combinedStartTime = `${editedStartDate}T${editedStartTime}:00.000Z`;

    const formData = {
      region: selectedRegion ? selectedRegion.value : null,
      seller: selectedSeller ? selectedSeller.value : null,
      startTime: combinedStartTime,
      interval: interval, 
    };

    const response = await fetch(`${BASE_URL}/admin/auction/update/${currentAuction}`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log("Form Data:", formData);

    if (response.ok) {
      console.log("Auction successfully added.");
      alert("Auction Timing edited")
      setEditedStartDate(null);
      setEditedStartTime(null);
      setTimeInterval("");
      setSelectedRegion(null);
      setSelectedSeller(null);
    } else {
      console.error("Error adding auction:", response.statusText);
      alert("Error while editing")
    }
  };


  //COLUM AUCTION 
  const getStatus = (row) => {
    const endTime = new Date(row.endTime)
    const currentTime = new Date()

    // console.log("endTime:", endTime);
    // console.log("today:", currentTime);

    if (endTime > currentTime) {
      return "Live";
    } else {
      return "Ended";
    }
  };

  const handleEditClick = (auction) => {
    const auctionStartTime = new Date(auction.startTime);


    const startDateString = auctionStartTime.toISOString().split('T')[0];
    setEditedStartDate(startDateString);


    const hours = auctionStartTime.getHours().toString().padStart(2, '0');
    const minutes = auctionStartTime.getMinutes().toString().padStart(2, '0');
    setEditedStartTime(`${hours}:${minutes}`);


    localStorage.setItem("currentAuction", JSON.stringify(auction._id));
  };









  const columns = [
    {
      name: "Registration No",
      selector: (row) => row.registrationNumber,
      sortable: true,
    },
    {
      name: "Agreement No",
      selector: (row) => row.agreementNumber,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Product Auction Name",
      selector: (row) => row.productName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => {
        // console.log(row.startTime.split("T")[0]);
        const date = new Date(row.startTime.split("T")[0]);
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
        return formattedDate;
      },
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => {
        const date = new Date(row.endTime.split("T")[0]);
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
        return formattedDate;
      },
      sortable: true,
    },
    {
      name: "Total Bid",
      selector: (row) => row.bid_remains,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => getStatus(row),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="_edit">
          <BiEdit
            size="18"
            color="#1b3ea9"
            onClick={() => handleEditClick(row)}
          />
        </div>
      ),
    },
  ];

  // console.log(auctions)
  return (
    <div className="setting-container">
      <div className="setting-head">
        <h1>Setting Set Auction Timing</h1>
      </div>
      <div className="setting-dropdown">
        <Select
          name="region"
          value={selectedRegion}
          options={selectRegionOptions}
          className={style.basicmultiselectAuction}
          classNamePrefix="select"
          placeholder="Region"
          onChange={handleRegionChange}
        />
        <Select
          name="seller"
          value={selectedSeller}
          options={sellers}
          className={style.basicmultiselectAuction}
          classNamePrefix="select"
          placeholder="Seller"
          onChange={handleSellerChange}
        />
        <label>
          Start Date
          <input
            type="date"
            value={editedStartDate}
            onChange={(date) => setEditedStartDate(date.target.value)}
            placeholderText="Select a date"
          />
        </label>
        <label>
          Start Time
          <input
            type="time"
            onChange={(e) => setEditedStartTime(e.target.value)}
            value={editedStartTime}
          />
        </label>

        <label>
          Time Interval (in Minutes)
          <input
            type="number"
            placeholder="Interval Time"
            value={interval}
            onChange={handleTimeIntervalChange}
          />
        </label>
      </div>
      <button className="sub-button" onClick={handleSubmit}>
        Submit
      </button>


      <DataTable
        title="Mannage Auction"
        columns={columns}
        data={auctions}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="75vh"
        selectableRows />



    </div>
  );
}

export default Setauctiontime;


// 2024-08-10T12:00:00.000Z