// import React, { useEffect, useState } from 'react';

// const Profile = () => {
//   const [profileData, setProfileData] = useState(null);

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const token = localStorage.getItem('token');

//         const response = await fetch('http://localhost:5000/get', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setProfileData(data);
//         } else {
//           // Profile fetch failed, display error message
//           const data = await response.json();
//           console.log(data);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProfileData();
//   }, []);

//   return (
//     <div>
//       <h2>Profile</h2>
//       {profileData ? (
//         <div>
//           <p>Name: {profileData.name}</p>
//           <p>Email: {profileData.email}</p>
//         </div>
//       ) : (
//         <p>Loading profile data...</p>
//       )}
//     </div>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from "react";
import './Profile.css'

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/get");
        const data = await response.json();
        setUserData(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="profile-page">
      {userData && (
        <div className="profile-card">
          <div className="profile-image">
            <img src={userData.image} alt="Profile" />
          </div>
          <div className="profile-details">
            <h2>{userData.name}</h2>
            <p>{userData.email}</p>
            <p>{userData.address}</p>
            <p>{userData.mobile}</p>
            <p>{userData.password}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
