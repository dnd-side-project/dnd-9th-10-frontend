import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { NewFriendCard, NewFriendCardProps } from './NewFriendCard';

export default {
  component: NewFriendCard,
  title: 'card/NewFriendCard',
  argTypes: {},
} as Meta;

const Template: StoryFn<NewFriendCardProps> = (args) => <NewFriendCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};