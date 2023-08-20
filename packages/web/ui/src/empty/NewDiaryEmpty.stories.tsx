import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { NewDiaryEmpty, NewDiaryEmptyProps } from "./NewDiaryEmpty";

export default {
  component: NewDiaryEmpty,
  title: "empty/NewDiaryEmpty",
  argTypes: {},
} as Meta;

const Template: StoryFn<NewDiaryEmptyProps> = (args) => (
  <NewDiaryEmpty {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
