import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Toast, ToastProps } from './Toast';

export default {
  component: Toast,
  title: 'toast/Toast',
  argTypes: {},
} as Meta;

const Template: StoryFn<ToastProps> = (args) => <Toast {...args} />;

export const Primary = Template.bind({});
Primary.args = {};