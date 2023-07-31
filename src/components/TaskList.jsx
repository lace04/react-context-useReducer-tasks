import React from 'react';
import TaskCard from './TaskCard';
import { useTask } from '../context/TaskContext';

function TaskList() {
  const { tasks, deleteTasks } = useTask();
  return (
    <div className='bg-zinc-900 rounded-md p-2'>
      {tasks.length > 0 && (
        <button onClick={() => deleteTasks()}>Borrar todo</button>
      )}

      <h1 className='text-2xl font-semibold m-5'>Task List</h1>
      {tasks.length > 0 ? (
        <div className='flex flex-col p-2 gap-2'>
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      ) : (
        <h1 className='text-4xl flex justify-center items-center m-10'>
          No tasks
        </h1>
      )}
    </div>
  );
}

export default TaskList;
