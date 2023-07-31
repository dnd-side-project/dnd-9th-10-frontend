import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { InfoText, InfoTextProps } from "./InfoText";

export default {
  component: InfoText,
  title: "text/InfoText",
  argTypes: {},
} as Meta;

const Template: StoryFn<InfoTextProps> = (args) => (
  <InfoText {...args}>한글 또는 영문, 숫자의 조합으로 12자 이내</InfoText>
);

export const Primary = Template.bind({});
Primary.args = {};
