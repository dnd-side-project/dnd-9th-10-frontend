import { StoryFn, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { within } from "@storybook/testing-library";
import { Topbar, TopbarProps } from "./Topbar";

export default {
  component: Topbar,
  title: "topbar/Topbar",
  argTypes: {},
} as Meta;

const Template: StoryFn<TopbarProps> = (args) => (
  <Topbar {...args} title="test" onBackClick={action("onBackClick")} />
);

export const Primary = Template.bind({});
Primary.args = {};
