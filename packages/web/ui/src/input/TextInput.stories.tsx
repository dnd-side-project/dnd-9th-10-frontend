import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { TextInput, TextInputProps } from "./TextInput";

export default {
  component: TextInput,
  title: "input/TextInput",
  argTypes: {},
} as Meta;

const Template: StoryFn<TextInputProps> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
