import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { BookmarkCardList, BookmarkCardListProps } from "./BookmarkCardList";

export default {
  component: BookmarkCardList,
  title: "bookmarks/BookmarkCardList",
  argTypes: {},
} as Meta;

const Template: StoryFn<BookmarkCardListProps> = (args) => (
  <BookmarkCardList
    {...args}
    data={[
      {
        description: "desc1",
        reference: "ref",
        active: true,
      },
      {
        description: "desc2",
        reference: "ref",
        active: true,
      },
      {
        description: "desc3",
        reference: "ref",
        active: true,
      },
    ]}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
