import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { NewDiaryTopbar, NewDiaryTopbarProps } from './NewDiaryTopbar';

export default {
  component: NewDiaryTopbar,
  title: 'topbar/NewDiaryTopbar',
  argTypes: {},
} as Meta;

const Template: StoryFn<NewDiaryTopbarProps> = (args) => <NewDiaryTopbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};