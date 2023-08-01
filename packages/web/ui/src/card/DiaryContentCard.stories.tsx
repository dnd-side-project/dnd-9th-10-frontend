import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { DiaryContentCard, DiaryContentCardProps } from "./DiaryContentCard";

export default {
  component: DiaryContentCard,
  title: "card/DiaryContentCard",
  argTypes: {},
} as Meta;

const Template: StoryFn<DiaryContentCardProps> = (args) => (
  <DiaryContentCard {...args} content="testestset" />
);

export const Primary = Template.bind({});
Primary.args = {};
