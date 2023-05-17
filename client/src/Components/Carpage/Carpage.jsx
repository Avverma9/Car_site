import React from "react";
import "./Carpage.css";
import { useLocation } from "react-router-dom";
import { MdPriceCheck } from "react-icons/md";

const Carpage = () => {
  const location = useLocation();
  if (location.pathname !== "/sell") {
    return null;
  }
  return (
    <div className="car-page">
      <h4>Sell in 3 easy steps</h4>

      <div className="image-row">
        <div className="image-column">
          <img
            src="https://content.pymnts.com/wp-content/uploads/2022/09/online-car-sales.jpg"
            alt="Car 1"
          />
          <p>Get Price Online</p>
          <p1>
            Answer some questions about your car to help us understand its
            condition
          </p1>
        </div>
        <div className="image-column">
          <img
            src="https://stimg.cardekho.com/pwa/img/valuation1_720%C3%97518-min.png"
            alt="Car 2"
          />
          <p>Car Inspection</p>
          <p1>
            Our car expert physically verifies your car's condition and we will
            give the final offer
          </p1>
        </div>
        <div className="image-column">
          <img
            src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2020/07/spinny.jpg"
            alt="Car 3"
          />
          <p>Car Pickup & Payment</p>
          <p1>
            We will transfer the amount directly to your bank account before
            your car is picked up
          </p1>
        </div>
      </div>
      <h4>Why AE MOTORS ?</h4>
      <div className="image-row">
        <div className="image-column">
          <h4>Great Price</h4>
          <p>
            We have brought 10 lakh+ cards and that help us offer you a great
            price instantly
          </p>
        </div>
        <div className="image-column">
          <h4>
            <MdPriceCheck />
            Instant Payment{" "}
          </h4>
          <p>
            We will transfer the amount directly to your bank account before
            your car is picked up
          </p>
        </div>
        <div className="image-column">
          <h4>Free RC Transfer</h4>
          <p>
            We'll handle all the paperwork for free, from loan clearance to RC
            transfer
          </p>
        </div>

        <div className="image-column">
          <img
            src="https://media.istockphoto.com/id/1030960660/photo/mother-turns-around-to-her-children-on-the-back-seat-of-car.jpg?s=612x612&w=0&k=20&c=HSZB_HqQw2z6dnvlQmN_UA91pbwrepZufpYwOHM7Y1o="
            alt="Car 7"
          />
          <p>
            David begins his car buying journey by researching different car
            models, brands, and features. He may visit the AE Motors website or
            explore other online resources to gather information and compare
            options.
          </p>
        </div>
        <div className="image-column">
          <img
            src="https://static.toiimg.com/thumb/msid-66616869,width-400,resizemode-4/66616869.jpg"
            alt="Car 7"
          />
          <p>
            Jitesh expresses interest in a particular car model and requests a
            test drive. The sales representative arranges a test drive, allowing
            Jitesh to experience the car's performance, comfort, and handling
            firsthand.
          </p>
        </div>
        <div className="image-column">
          <img
            src="https://media.istockphoto.com/id/1423370791/photo/smiling-young-man-driving-a-car.jpg?b=1&s=170667a&w=0&k=20&c=R_SN0bxQrD3glUAOQgJk9-KDsm7xC1dp7q1uq4D6peQ="
            alt="Car 7"
          />
          <p>Car 9 Description</p>
        </div>
      </div>
    </div>
  );
};

export default Carpage;
