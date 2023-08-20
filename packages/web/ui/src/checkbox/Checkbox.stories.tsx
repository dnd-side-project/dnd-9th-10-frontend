import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  component: Checkbox,
  title: "checkbox/Checkbox",
  argTypes: {},
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
