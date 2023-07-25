import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { CheckList, CheckListProps } from "./CheckList";

export default {
  component: CheckList,
  title: "checklist/CheckList",
  argTypes: {},
} as Meta;

const Template: StoryFn<CheckListProps> = (args) => (
  <CheckList
    {...args}
    data={[{ name: "test" }, { name: "test2" }, { name: "test3" }]}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
