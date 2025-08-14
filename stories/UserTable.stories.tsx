import type { Meta, StoryObj } from '@storybook/react';
import UserTable from '~/components/Users/UserTable';

const meta: Meta<typeof UserTable> = {
  title: 'Components/UserTable',
  component: UserTable,
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
