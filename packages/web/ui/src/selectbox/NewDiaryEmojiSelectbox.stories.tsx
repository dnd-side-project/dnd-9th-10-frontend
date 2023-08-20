import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import {
  NewDiaryEmojiSelectbox,
  NewDiaryEmojiSelectboxProps,
} from "./NewDiaryEmojiSelectbox";

export default {
  component: NewDiaryEmojiSelectbox,
  title: "selectbox/NewDiaryEmojiSelectbox",
  argTypes: {},
} as Meta;

const Template: StoryFn<NewDiaryEmojiSelectboxProps> = (args) => (
  <NewDiaryEmojiSelectbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
