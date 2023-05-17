import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Create FormData object to send the form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('address', address);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('password', password);
    formData.append('images', selectedImage);
   

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Signup successful');
        // Reset form fields
        setName('');
        setAddress('');
        setEmail('');
        setMobile('');
        setPassword('');
        setSelectedImage(null);
        navigate("/signin")
      } else {
        console.log('Signup failed');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="card-signup">
       <div className="logo-wrapper-signup">
        <img src="https://www.animatedimages.org/data/media/67/animated-car-image-0124.gif" alt="Logo" className="logo-signup" />
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="input-field-signup"
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
          className="input-field-signup"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="input-field-signup"
        />
        <input
          type="text"
          placeholder="Mobile"
          value={mobile}
          onChange={(event) => setMobile(event.target.value)}
          required
          className="input-field-signup"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          className="input-field-signup"
        />
        <div className="profile-picture-wrapper-signup">
          {selectedImage ? (
            <div
              className="profile-picture-signup"
              style={{
                backgroundImage: `url(${URL.createObjectURL(selectedImage)})`,
              }}
            ></div>
          ) : (
            <div className="profile-picture-signup"></div>
          )}
          <label className="upload-button-signup">
            Select Profile Picture
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      
    </div>
  );
};

export default SignUp;
