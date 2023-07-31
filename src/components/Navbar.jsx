import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Heading from '../components/Heading';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import NotFound from '../components/NotFound';

function Navbar() {
  return (
    <div>
      <Heading />
      <Routes>
        <Route path='/add' element={<TaskForm />} />
        <Route path='/edit/:id' element={<TaskForm />} />
        <Route path='/' element={<TaskList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Navbar;
