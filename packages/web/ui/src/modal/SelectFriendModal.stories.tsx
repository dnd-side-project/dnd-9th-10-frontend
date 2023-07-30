import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { SelectFriendModal, SelectFriendModalProps } from './SelectFriendModal';

export default {
  component: SelectFriendModal,
  title: 'modal/SelectFriendModal',
  argTypes: {},
} as Meta;

const Template: StoryFn<SelectFriendModalProps> = (args) => <SelectFriendModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};