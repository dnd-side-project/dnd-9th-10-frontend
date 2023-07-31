import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { NewDiaryEmojiModal, NewDiaryEmojiModalProps } from './NewDiaryEmojiModal';

export default {
  component: NewDiaryEmojiModal,
  title: 'modal/NewDiaryEmojiModal',
  argTypes: {},
} as Meta;

const Template: StoryFn<NewDiaryEmojiModalProps> = (args) => <NewDiaryEmojiModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};