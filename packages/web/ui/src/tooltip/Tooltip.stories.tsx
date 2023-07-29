import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Tooltip, TooltipProps } from './Tooltip';

export default {
  component: Tooltip,
  title: 'tooltip/Tooltip',
  argTypes: {},
} as Meta;

const Template: StoryFn<TooltipProps> = (args) => <Tooltip {...args} >먼저 친구를 생성 해 보세요</Tooltip>;

export const Primary = Template.bind({});
Primary.args = {};