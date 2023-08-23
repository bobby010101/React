import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const UserForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigate  = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !phoneNumber || !email) {
      setErrorMessage('Please fill in all fields before submitting.');
      return;
    }

    const userDetails = { name, phoneNumber, email };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    navigate('/second-page');
  };

  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <form onSubmit={handleSubmit}>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <TextField label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
    </div>
    
  );
};

export default UserForm;
