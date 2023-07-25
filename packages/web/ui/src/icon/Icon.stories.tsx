import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Icon, IconProps } from "./Icon";

export default {
  component: Icon,
  title: "icon/Icon",
  argTypes: {},
} as Meta;

const Template: StoryFn<IconProps> = (args) => (
  <Icon {...args} name="icon_back" />
);

export const Primary = Template.bind({});
Primary.args = {};
