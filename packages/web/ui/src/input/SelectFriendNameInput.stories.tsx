import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { SelectFriendNameInput, SelectFriendNameInputProps } from './SelectFriendNameInput';

export default {
  component: SelectFriendNameInput,
  title: 'input/SelectFriendNameInput',
  argTypes: {},
} as Meta;

const Template: StoryFn<SelectFriendNameInputProps> = (args) => <SelectFriendNameInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};