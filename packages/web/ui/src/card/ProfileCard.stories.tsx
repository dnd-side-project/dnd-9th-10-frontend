import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { ProfileCard, ProfileCardProps } from './ProfileCard';

export default {
  component: ProfileCard,
  title: 'card/ProfileCard',
  argTypes: {},
} as Meta;

const Template: StoryFn<ProfileCardProps> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};