import { createContext, useContext, useState, useReducer } from 'react';
import appReducer from './AppReducer';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'Task 1',
      description: 'Learn about React',
      done: false,
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Learn about React Router',
      done: true,
    },
  ],
};

export const taskContext = createContext(initialState);

export const useTask = () => {
  const context = useContext(taskContext);
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const createTask = (task) => {
    // console.log(task);
    dispatch({
      type: 'CREATE_TASK',
      payload: {
        ...task,
        id: uuidv4(),
        done: false,
      },
    });
  };

  const deleteTasks = () => {
    dispatch({
      type: 'DELETE_TASKS',
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: id,
    });
  };

  const updateTask = (updatedTask) => {
    dispatch({
      type: 'UPDATE_TASK',
      payload: updatedTask,
    });
  };

  const toggleTaskDone = (id) => {
    dispatch({
      type: 'TOGGLE_TASK_DONE',
      payload: id,
    });
  };

  return (
    <taskContext.Provider
      value={{
        ...state,
        createTask,
        deleteTasks,
        deleteTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </taskContext.Provider>
  );
};
