import type { Meta, StoryObj } from '@storybook/react';
import UserCard from '~/components/Users/UserCard';
import { reactRouterParameters } from 'storybook-addon-remix-react-router';
import { mockUserDetail } from './mock/users';

const meta: Meta<typeof UserCard> = {
  title: 'Components/UserCard',
  component: UserCard,
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/users/1',
        pathParams: { id: '1' },
      },
      routing: {
        path: '/users/:id',
        element: <UserCard user={mockUserDetail} />,
      },
    }),
  },
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
  args: {
    user: mockUserDetail
  }
};
