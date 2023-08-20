import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { NewCheckListItem, NewCheckListItemProps } from "./NewCheckListItem";

export default {
  component: NewCheckListItem,
  title: "checklist/NewCheckListItem",
  argTypes: {},
} as Meta;

const Template: StoryFn<NewCheckListItemProps> = (args) => (
  <NewCheckListItem {...args} name="기피하는 친구 유형 1" />
);

export const Primary = Template.bind({});
Primary.args = {};
