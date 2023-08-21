import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { DiaryEmojiSelectbox, DiaryEmojiSelectboxProps } from './DiaryEmojiSelectbox';

export default {
  component: DiaryEmojiSelectbox,
  title: 'selectbox/DiaryEmojiSelectbox',
  argTypes: {},
} as Meta;

const Template: StoryFn<DiaryEmojiSelectboxProps> = (args) => <DiaryEmojiSelectbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};