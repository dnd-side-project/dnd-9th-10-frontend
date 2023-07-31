import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { FriendCard, FriendCardProps } from "./FriendCard";

export default {
  component: FriendCard,
  title: "card/FriendCard",
  argTypes: {},
} as Meta;

const Template: StoryFn<FriendCardProps> = (args) => (
  <FriendCard
    {...args}
    statusText="12일째 작성 중"
    name="김도리"
    diaryCount={10}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
