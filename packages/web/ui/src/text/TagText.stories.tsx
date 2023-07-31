import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { TagText, TagTextProps } from "./TagText";

export default {
  component: TagText,
  title: "text/TagText",
  argTypes: {},
} as Meta;

const Template: StoryFn<TagTextProps> = (args) => (
  <TagText {...args}>testtest</TagText>
);

export const Primary = Template.bind({});
Primary.args = {};
