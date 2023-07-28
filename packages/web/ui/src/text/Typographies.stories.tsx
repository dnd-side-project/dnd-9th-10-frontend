import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import {
  Bold22,
  Medium16,
  Regular14,
  Semibold14,
  TypographiesProps,
} from "./Typographies";

export default {
  component: Bold22,
  title: "text/Typographies",
  argTypes: {},
} as Meta;

const Template: StoryFn<TypographiesProps> = (args) => {
  return (
    <>
      <Bold22 {...args}>Test</Bold22>
      <Semibold14 {...args}>Test</Semibold14>
      <Medium16 {...args}>Test</Medium16>
      <Regular14 {...args}>Test</Regular14>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
