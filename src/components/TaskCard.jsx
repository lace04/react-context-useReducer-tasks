import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDelete } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { IoMdDoneAll } from 'react-icons/io';
import { ImCancelCircle } from 'react-icons/im';
import { useTask } from '../context/TaskContext';

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTask();
  return (
    <div className='bg-zinc-800 p-4 rounded-md flex justify-between'>
      <div className=''>
        <h2 className='text-xl mb-2'>{task.title}</h2>
        <p className='text-sm text-zinc-500 mb-2'>{task.description}</p>
        <p className='text-left text-xs text-zinc-600'>{task.id}</p>
      </div>
      <div className='flex items-center gap-x-2'>
        <button onClick={() => toggleTaskDone(task.id)}>
          {task.done ? (
            <IoMdDoneAll
              size={24}
              className='text-green-400 hover:text-red-400 transition duration-300'
            />
          ) : (
            <ImCancelCircle
              size={24}
              className='text-red-400 hover:text-green-400 transition duration-300'
            />
          )}
        </button>
        <Link
          to={`/edit/${task.id}`}
          className='text-blue-500 hover:text-blue-700 transition'
        >
          <AiOutlineEdit size={24} />
        </Link>
        <button
          onClick={() => deleteTask(task.id)}
          className='text-red-500 hover:text-red-700 transition'
        >
          <MdOutlineDelete size={24} />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
