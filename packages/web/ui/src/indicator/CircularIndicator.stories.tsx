import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { CircularIndicator, CircularIndicatorProps } from './CircularIndicator';

export default {
  component: CircularIndicator,
  title: 'indicator/CircularIndicator',
  argTypes: {},
} as Meta;

const Template: StoryFn<CircularIndicatorProps> = (args) => <CircularIndicator {...args} current={1} totalCount={4} />;

export const Primary = Template.bind({});
Primary.args = {};