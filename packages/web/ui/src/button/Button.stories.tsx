import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Button, ButtonProps } from "./Button";

export default {
  component: Button,
  title: "button/Button",
  argTypes: {},
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>testtest</Button>
);

export const Primary = Template.bind({});
Primary.args = {};
