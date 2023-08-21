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
        id: 1,
        name: "test",
        checked: false,
      },
      {
        id: 2,
        name: "test",
        checked: false,
      },
      {
        id: 3,
        name: "test",
        checked: false,
      },
      {
        id: 4,
        name: "test",
        checked: false,
      },
      {
        id: 5,
        name: "test",
        checked: false,
      },
    ]}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
