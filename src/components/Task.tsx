import React from 'react';
import PropTypes from 'prop-types';
import "../index.css"

export interface TaskInterface {
    id?: string
    title?: string
    state?: string
    updatedAt?: Date
}

export interface TasksProps {
    task: TaskInterface  
}

const Task: React.FC<TasksProps> = ({ task: { id, title, state } }) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => {}} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => {}} >
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}

export default Task;

