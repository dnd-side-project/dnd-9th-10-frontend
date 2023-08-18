import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { DateInput, DateInputProps } from './DateInput';

export default {
  component: DateInput,
  title: 'input/DateInput',
  argTypes: {},
} as Meta;

const Template: StoryFn<DateInputProps> = (args) => <DateInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};