import React from 'react';
import './Profile.css';
import {FaRegAddressBook} from 'react-icons/fa'

const Profile = () => {
  const name = "Ankit Kumar Verma";
  const address = "Patna, Bihar";
  const email = "Av95766@gmail.com";
  const mobile = "+91 9576630507";
  const password = "********";
  const dob = "August 20th, 1999";
  const profileImage = "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1684158922837-147285802_1552126588295847_4530115828836707325_n.jpg"; // Replace with your actual profile image URL

  return (
    <div className="card-profile">
      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="profile-details">
        <h2>{name}</h2>
        <div className="detail-row">
          <span className="detail-label" ><FaRegAddressBook/>  Address:</span>
          <span className="detail-value">{address}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Email:</span>
          <span className="detail-value">{email}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label"> Mobile:</span>
          <span className="detail-value">{mobile}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Password:</span>
          <span className="detail-value">{password}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Date of Birth:</span>
          <span className="detail-value">{dob}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
