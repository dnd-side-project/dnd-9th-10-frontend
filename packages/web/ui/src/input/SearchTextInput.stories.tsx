import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { SearchTextInput, SearchTextInputProps } from './SearchTextInput';

export default {
  component: SearchTextInput,
  title: 'input/SearchTextInput',
  argTypes: {},
} as Meta;

const Template: StoryFn<SearchTextInputProps> = (args) => <SearchTextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};