import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';

function Heading() {
  return (
    <div>
      <div className='flex items-center mb-10 justify-between'>
        <Link to='/'>
          <h1 className='text-2xl font-semibold'>Task App Context Reducer</h1>
        </Link>
        <Link to='/add'>
          <button className='flex items-center gap-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <BsPlusLg />
            Add Task
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Heading;
