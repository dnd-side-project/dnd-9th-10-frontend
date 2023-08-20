import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { BookmarkCard, BookmarkCardProps } from "./BookmarkCard";
import QueryClientWrapper from "web/libs/react-query";

export default {
  component: BookmarkCard,
  title: "bookmarks/BookmarkCard",
  argTypes: {},
} as Meta;

const Template: StoryFn<BookmarkCardProps> = (args) => (
  <QueryClientWrapper>
    <BookmarkCard
      {...args}
      description={`궁극적으로 결혼이든 우정이든 관계에서 
유대감을 형성하는 것은 대화다. `}
      reference="아일랜드 작가, 오스카 와일드"
    />
  </QueryClientWrapper>
);

export const Primary = Template.bind({});
Primary.args = {};
