import { Meta, StoryFn } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { CheckListItem, CheckListItemProps } from "./CheckListItem";

export default {
  component: CheckListItem,
  title: "checklist/CheckListItem",
} as Meta;

const Template: StoryFn<CheckListItemProps> = (args) => (
  <CheckListItem {...args} name="tettesttet" />
);

export const Primary = Template.bind({});
Primary.args = {};
