import React from 'react';

import {TaskList} from '../components/TaskList';
import * as TaskStories from './Task.stories';
import {TasksListProps} from "../components/TaskList" 
import { Story } from '@storybook/react/types-6-0';



export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [(story: () => React.ReactNode) => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template:Story<TasksListProps> = args => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  tasks: [
    { ...TaskStories.Default.args?.task, id: '1', title: 'Task 1', state : "TASK_INBOX"  },
    { ...TaskStories.Default.args?.task, id: '2', title: 'Task 2', state : "TASK_INBOX"  },
    { ...TaskStories.Default.args?.task, id: '3', title: 'Task 3', state : "TASK_INBOX"  },
    { ...TaskStories.Default.args?.task, id: '4', title: 'Task 4', state : "TASK_INBOX"  },
    { ...TaskStories.Default.args?.task, id: '5', title: 'Task 5', state : "TASK_INBOX"  },
    { ...TaskStories.Default.args?.task, id: '6', title: 'Task 6', state : "TASK_INBOX"  },
  ], loading : (false)
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    { ...TaskStories.Default.args?.task, id: '1', title: 'Task 1', state : "TASK_INBOX" },
    { ...TaskStories.Default.args?.task, id: '2', title: 'Task 2', state : "TASK_INBOX"  },
    { ...TaskStories.Default.args?.task, id: '3', title: 'Task 3', state : "TASK_INBOX"  },
    { ...TaskStories.Default.args?.task, id: '4', title: 'Task 4', state : "TASK_INBOX"  },
    { ...TaskStories.Default.args?.task, id: '5', title: 'Task 5 (pinned)', state: 'TASK_PINNED' },
    { ...TaskStories.Default.args?.task, id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'} ,
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};