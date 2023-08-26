import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Textarea, TextareaProps } from './Textarea';

export default {
  component: Textarea,
  title: 'input/Textarea',
  argTypes: {},
} as Meta;

const Template: StoryFn<TextareaProps> = (args) => <Textarea {...args} />;

export const Primary = Template.bind({});
Primary.args = {};