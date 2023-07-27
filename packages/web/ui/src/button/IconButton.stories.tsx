import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { IconButton, IconButtonProps } from "./IconButton";

export default {
  component: IconButton,
  title: "button/IconButton",
  argTypes: {},
} as Meta;

const Template: StoryFn<IconButtonProps> = (args) => (
  <IconButton {...args} name="icon_back" />
);

export const Primary = Template.bind({});
Primary.args = {};
