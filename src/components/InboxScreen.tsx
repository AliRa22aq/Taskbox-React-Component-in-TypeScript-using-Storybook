// src/components/InboxScreen.js

import React from 'react';
import {useSelector} from "react-redux"
import TaskList from './TaskList';
import {TaskInterface} from "./Task"
import "../index.css"


export interface InboxScreenInterface {
    error?: any
}

const PureInboxScreen: React.FC<InboxScreenInterface> =  ({error}) => {
    const state = useSelector((state:TaskInterface[]) => (state))        
    console.log(state)

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList tasks = {state} loading = {false}/>
    </div>
  );
}

export default PureInboxScreen;