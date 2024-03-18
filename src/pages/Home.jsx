import React, { useState } from 'react';
import Navbar from '../components/Navbar';



function Home() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleBuyClick = () => {
    console.log(`Name: ${name}, Message: ${message}`);
    setName('');
    setMessage('');
  };

  
  

  return (
    <div>
        <Navbar />
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Message:
        <input type="text" value={message} onChange={handleMessageChange} />
      </label>
      <br />
      <button onClick={handleBuyClick}>Buy</button>
    </div>
  );
}

export default Home;