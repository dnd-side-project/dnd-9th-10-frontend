import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { SubmitButton, SubmitButtonProps } from "./SubmitButton";

export default {
  component: SubmitButton,
  title: "button/SubmitButton",
  argTypes: {},
} as Meta;

const Template: StoryFn<SubmitButtonProps> = (args) => (
  <SubmitButton {...args} name="선택완료" />
);

export const Primary = Template.bind({});
Primary.args = {};
