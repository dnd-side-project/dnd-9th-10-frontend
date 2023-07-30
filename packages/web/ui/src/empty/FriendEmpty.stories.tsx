import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { FriendEmpty, FriendEmptyProps } from './FriendEmpty';

export default {
  component: FriendEmpty,
  title: 'empty/FriendEmpty',
  argTypes: {},
} as Meta;

const Template: StoryFn<FriendEmptyProps> = (args) => <FriendEmpty {...args} />;

export const Primary = Template.bind({});
Primary.args = {};