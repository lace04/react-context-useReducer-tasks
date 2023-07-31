import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTask } from '../context/TaskContext';
import { BiSave } from 'react-icons/bi';

function TaskForm() {
  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
  });
  const { createTask, tasks, updateTask } = useTask();

  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      updateTask(task);
    } else {
      createTask(task);
    }
    navigate('/');
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);
    if (taskFound) {
      setTask({
        id: taskFound.id,
        title: taskFound.title,
        description: taskFound.description,
      });
    }
  }, [params.id, tasks]);

  return (
    <form
      onSubmit={onSubmit}
      className='flex flex-col bg-zinc-800 w-1/2 md:w-1/3 mx-auto mt-10 p-6 rounded-md gap-y-2 text-left'
    >
      <label htmlFor='title'>Title</label>
      <input
        type='text'
        name='title'
        className='bg-zinc-700 p-2 rounded-md'
        placeholder='Write a title'
        autoFocus
        onChange={handleChange}
        value={task.title}
      />

      <label htmlFor='description'>Description</label>
      <textarea
        name='description'
        rows={3}
        className='bg-zinc-700 p-2 rounded-md'
        placeholder='Write a description'
        onChange={handleChange}
        value={task.description}
      />
      <button className='flex items-center justify-center bg-blue-600 p-2 rounded-md mt-2 hover:bg-blue-700 transition duration-300 gap-x-2'>
        <BiSave size={20} />
        {params.id ? 'Update task' : 'Add task'}
      </button>
    </form>
  );
}

export default TaskForm;
