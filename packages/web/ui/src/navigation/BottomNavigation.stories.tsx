import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { BottomNavigation, BottomNavigationProps } from "./BottomNavigation";
import { action } from "@storybook/addon-actions";

export default {
  component: BottomNavigation,
  title: "navigation/BottomNavigation",
  argTypes: {},
} as Meta;

const Template: StoryFn<BottomNavigationProps> = (args) => (
  <>
    <div style={{ marginTop: 100 }} />
    <BottomNavigation
      {...args}
      active={"home"}
      onSelected={action("onSelected")}
      onAdd={action("onAdd")}
    />
  </>
);

export const Primary = Template.bind({});
Primary.args = {};
