import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { NewCheckList, NewCheckListProps } from "./NewCheckList";

export default {
  component: NewCheckList,
  title: "checklist/NewCheckList",
  argTypes: {},
} as Meta;

const Template: StoryFn<NewCheckListProps> = (args) => (
  <NewCheckList
    {...args}
    data={[
      {
        name: "test",
        checked: false,
      },
      {
        name: "test",
        checked: false,
      },
      {
        name: "test",
        checked: false,
      },
      {
        name: "test",
        checked: false,
      },
      {
        name: "test",
        checked: false,
      },
    ]}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
