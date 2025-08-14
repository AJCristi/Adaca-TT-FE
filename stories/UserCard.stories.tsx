import type { Meta, StoryObj } from '@storybook/react';
import UserCard from '~/components/Users/UserCard';
import { reactRouterParameters } from 'storybook-addon-remix-react-router';

const meta: Meta<typeof UserCard> = {
  title: 'Components/UserCard',
  component: UserCard,
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: '1' },
      },
      routing: { path: '/users/:id' },
    }),
  },
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
  args: {
    user: {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      },
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874'
      }
    }
  }
};
