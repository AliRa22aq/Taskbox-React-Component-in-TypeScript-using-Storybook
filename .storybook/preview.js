// Configures Storybook to log the actions(onArchiveTask and onPinTask) in the UI.

import {Provider} from "react-redux";
import {store} from '../src/store/TaskSlice'


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <Provider store= {store} >
      <Story />
    </Provider>
  ),
];