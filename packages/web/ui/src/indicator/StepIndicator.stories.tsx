import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { StepIndicator, StepIndicatorProps } from "./StepIndicator";

export default {
  component: StepIndicator,
  title: "indicator/StepIndicator",
  argTypes: {},
} as Meta;

const Template: StoryFn<StepIndicatorProps> = (args) => (
  <StepIndicator {...args} current={1} totalCount={2} />
);

export const Primary = Template.bind({});
Primary.args = {};
