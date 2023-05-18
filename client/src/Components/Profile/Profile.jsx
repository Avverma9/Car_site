import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { BsPencilSquare } from 'react-icons/bs'; // Import the update icon from react-icons


const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is signed in (you can implement your own logic here)
    const isSignedIn = localStorage.getItem('isSignedIn');
    if (!isSignedIn) {
      navigate('/signin'); // Redirect to the sign-in page if not signed in
    } else {
      // Fetch user data from the server
      const userId = localStorage.getItem('userId');
      fetch(`https://carfullstack.onrender.com/get/${userId}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to fetch user data');
          }
        })
        .then(data => {
          setUserData(data);
          setIsLoading(false); // Set loading state to false after data is fetched
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false); // Set loading state to false in case of an error
        });
    }
  }, []);

  const handleSignOut = () => {
    // Clear user data and sign out
    localStorage.removeItem('isSignedIn');
    localStorage.removeItem('userId');
    navigate('/signin'); // Redirect to the sign-in page
  };

  return (
    <div className="profile-container">
      <h1 className='profile-heading'>Profile</h1>
      {isLoading ? (
        <img src="https://cdn.dribbble.com/users/1888003/screenshots/10900711/media/ee3dcf5209f7f6261c17e1e1b7cacd50.gif" alt="Loading" className="profile-loading-image" />
      ) : userData ? (
        <div className="profile-info">
          <div className="profile-images">
           
            <div className="profile-actions">
              <BsPencilSquare size={24} />
            </div>
          </div>
          <p><span className="data-label">Name:</span> {userData.name}</p>
          <p><span className="data-label">Address:</span> {userData.address}</p>
          <p><span className="data-label">Email:</span> {userData.email}</p>
          <p><span className="data-label">Mobile:</span> {userData.mobile}</p>
          {userData.images && userData.images.length > 0 ? (
            <div className="images-container">
               {userData.images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} className="user-image" />
              ))}
            </div>
          ) : null}
          <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default Profile;
