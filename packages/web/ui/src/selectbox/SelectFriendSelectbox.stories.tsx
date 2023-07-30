import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import {
  SelectFriendSelectbox,
  SelectFriendSelectboxProps,
} from "./SelectFriendSelectbox";
import { action } from "@storybook/addon-actions";

export default {
  component: SelectFriendSelectbox,
  title: "selectbox/SelectFriendSelectbox",
  argTypes: {},
} as Meta;

const Template: StoryFn<SelectFriendSelectboxProps> = (args) => (
  <SelectFriendSelectbox
    {...args}
    selectedIndex={0}
    onSelected={action("onSelected")}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
