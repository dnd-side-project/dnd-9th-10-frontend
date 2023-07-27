import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Bold22, Normal14, TypographiesProps } from "./Typographies";

export default {
  component: Bold22,
  title: "text/Typographies",
  argTypes: {},
} as Meta;

const Template: StoryFn<TypographiesProps> = (args) => {
  return (
    <>
      <Bold22 {...args}>Test</Bold22>
      <Normal14 {...args}>Test</Normal14>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
