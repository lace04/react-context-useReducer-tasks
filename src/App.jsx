import React, { useContext } from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='h-screen text-center p-10'>
      <div className='container mx-auto h-full'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
