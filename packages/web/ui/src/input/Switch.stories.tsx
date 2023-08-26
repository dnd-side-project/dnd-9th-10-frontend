import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Switch, SwitchProps } from './Switch';

export default {
  component: Switch,
  title: 'input/Switch',
  argTypes: {},
} as Meta;

const Template: StoryFn<SwitchProps> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {};