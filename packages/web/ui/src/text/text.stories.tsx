import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Text, TextProps } from './text';

export default {
  component: Text,
  title: 'text/Text',
  argTypes: {},
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {};