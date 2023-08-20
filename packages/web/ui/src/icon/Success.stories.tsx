import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Success, SuccessProps } from "./Success";

export default {
  component: Success,
  title: "icon/Success",
  argTypes: {},
} as Meta;

const Template: StoryFn<SuccessProps> = (args) => <Success {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
