import React from 'react';

function UserProfile() {
  const name = "Garfield Roux";
  const bio = "Aspiring software engineer";

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '300px',
    margin: '20px auto',
    backgroundColor: '#f9f7f9'
  };

  const imageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px'
  };

  const nameStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: 'black'
  };

  const bioStyle = {
    fontSize: '1rem',
    color: '#555',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <img
        style={imageStyle}
        src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
      alt="User
      />
      <h1 style={nameStyle}>{name}</h1>
      <p style={bioStyle}>{bio}</p>
    </div>
  );
}

export default UserProfile;
