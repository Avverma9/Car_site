import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (response.ok) {
        const data = await response.json();
        const { userId } = data;
  
        localStorage.setItem('isSignedIn', 'true');
        localStorage.setItem('userId', userId);
        navigate('/profile'); // Redirect to the profile page
      } else {
        console.log('Sign in failed');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (location.pathname !== '/signin') {
    return null;
  }

  return (
    <div className="card-signin">
      <div className="image-container-signin">
        <img
          src="https://cdn.dribbble.com/users/2374064/screenshots/4732016/car-jump.gif"
          alt="Logo"
          className="logo-signin"
        />
      </div>

      <form onSubmit={handleSignIn}>
        <div className="form-group-signin">
          <label>Username:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group-signin">
          <label>Password: </label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="show-password-button-signin"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button type="submit">Sign In</button>
        <br />
        Don't have an account?
        <button href="/signup">SIGN UP</button>
      </form>
      <br />
    </div>
  );
};

export default SignIn;
