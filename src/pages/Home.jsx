import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form'
import Display from '../components/Display';



function Home() {
   
  return (
    <div className='bg-gradient-to-r from-gray-100 to-gray-300 h-screen w-full'>
        <Navbar />
        <Form />
        <Display />
    </div>
  );
}

export default Home;