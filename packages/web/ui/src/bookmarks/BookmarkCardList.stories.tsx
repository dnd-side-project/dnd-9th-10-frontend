import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { BookmarkCardList, BookmarkCardListProps } from "./BookmarkCardList";
import React from "react";
import QueryClientWrapper from "web/libs/react-query";

export default {
  component: BookmarkCardList,
  title: "bookmarks/BookmarkCardList",
  argTypes: {},
} as Meta;

const Template: StoryFn<BookmarkCardListProps> = (args) => (
  <QueryClientWrapper>
    <BookmarkCardList
      {...args}
      data={[
        {
          id: 1,
          description: "desc1",
          reference: "ref",
          active: true,
        },
        {
          id: 2,
          description: "desc2",
          reference: "ref",
          active: true,
        },
        {
          id: 3,
          description: "desc3",
          reference: "ref",
          active: true,
        },
      ]}
    />
  </QueryClientWrapper>
);

export const Primary = Template.bind({});
Primary.args = {};
