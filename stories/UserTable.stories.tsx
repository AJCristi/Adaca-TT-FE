import type { Meta, StoryObj } from '@storybook/react';
import UserTable from '~/components/Users/UserTable';
import { reactRouterParameters } from 'storybook-addon-remix-react-router';

const meta: Meta<typeof UserTable> = {
  title: 'Components/UserTable',
  component: UserTable,
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/users',
      },
      routing: { path: '/users' },
    }),
  },
};

export default meta;
type Story = StoryObj<typeof UserTable>;

export const Default: Story = {
  args: {
    users: [
      { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz' },
      { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv' },
      { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net' }
    ]
  }
};
