import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { DiaryCard, DiaryCardProps } from "./DiaryCard";

export default {
  component: DiaryCard,
  title: "card/DiaryCard",
  argTypes: {},
} as Meta;

const Template: StoryFn<DiaryCardProps> = (args) => (
  <DiaryCard
    {...args}
    date="2011-11-11"
    description={`오늘 정말 힘든 날이다. 걔가 또 내가 
싫어하는 말들을 하는데 욕이 나오려고..`}
    tags={["1", "2", "3"]}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
