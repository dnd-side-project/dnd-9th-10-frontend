import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Loading, LoadingProps } from "./Loading";

export default {
  component: Loading,
  title: "icon/Loading",
  argTypes: {},
} as Meta;

const Template: StoryFn<LoadingProps> = (args) => <Loading {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
