import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Icon, IconProps } from "./Icon";

export default {
  component: Icon,
  title: "icon/Icon",
  argTypes: {},
} as Meta;

const Template: StoryFn<IconProps> = (args) => (
  <>
    <Icon {...args} name="icon_back" />
    <Icon {...args} name="back" />
    <Icon {...args} name="bookmark_active" />
    <Icon {...args} name="bookmark" />
    <Icon {...args} name="broken_heart" />
    <Icon {...args} name="checked" />
    <Icon {...args} name="close" />
    <Icon {...args} name="diary" />
    <Icon {...args} name="forward" />
    <Icon {...args} name="heart" />
    <Icon {...args} name="home" />
    <Icon {...args} name="modify" />
    <Icon {...args} name="my" />
    <Icon {...args} name="plus" />
    <Icon {...args} name="remove" />
    <Icon {...args} name="search" />
    <Icon {...args} name="setting" />
    <Icon {...args} name="sticker" />
    <Icon {...args} name="emoji1" />
    <Icon {...args} name="emoji2" />
    <Icon {...args} name="emoji3" />
    <Icon {...args} name="emoji4" />
    <Icon {...args} name="emoji5" />
    <Icon {...args} name="emoji6" />
  </>
);

export const Primary = Template.bind({});
Primary.args = {};
