import type { Meta, StoryObj } from '@storybook/react';
import UserTable from '~/components/Users/UserTable';
import { reactRouterParameters } from 'storybook-addon-remix-react-router';
import UserCard from '~/components/Users/UserCard';
import { mockUserDetail, mockUsers } from './mock/users';


const meta: Meta<typeof UserTable> = {
  title: 'Components/UserTable',
  component: UserTable,
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/users',
      },
      routing: [
        {
          path: '/users',
          element: <UserTable users={mockUsers} />,
        },
        {
          path: '/users/:id',
          element: <UserCard user={mockUserDetail} />,
        },
      ],
    }),
  },
};

export default meta;
type Story = StoryObj<typeof UserTable>;

export const Default: Story = {
  args: {
    users: mockUsers,
  }
};
