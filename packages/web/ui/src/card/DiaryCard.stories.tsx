import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { DiaryCard, DiaryCardProps } from './DiaryCard';

export default {
  component: DiaryCard,
  title: 'card/DiaryCard',
  argTypes: {},
} as Meta;

const Template: StoryFn<DiaryCardProps> = (args) => <DiaryCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};