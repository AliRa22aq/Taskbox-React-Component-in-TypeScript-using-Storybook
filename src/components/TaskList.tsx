// src/components/TaskList.js

import React from 'react';

import Task from './Task';
import {TaskInterface} from "./Task"


export interface TasksListProps {
    tasks : TaskInterface[]
    loading : boolean
    onPinTask? : any,
    onArchiveTask? : any
  
}

const TaskList: React.FC<TasksListProps> = ({ tasks, loading, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

export default TaskList