import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { AutocompleteSelectInput, AutocompleteSelectInputProps } from './AutocompleteSelectInput';

export default {
  component: AutocompleteSelectInput,
  title: 'input/AutocompleteSelectInput',
  argTypes: {},
} as Meta;

const Template: StoryFn<AutocompleteSelectInputProps> = (args) => <AutocompleteSelectInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};