import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Radiobox, RadioboxProps } from "./Radiobox";

export default {
  component: Radiobox,
  title: "checkbox/Radiobox",
  argTypes: {},
} as Meta;

const Template: StoryFn<RadioboxProps> = (args) => (
  <Radiobox {...args} checked={true} />
);

export const Primary = Template.bind({});
Primary.args = {};
