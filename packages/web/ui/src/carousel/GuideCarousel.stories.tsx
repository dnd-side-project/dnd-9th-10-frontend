import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { GuideCarousel, GuideCarouselProps } from "./GuideCarousel";
import { action } from "@storybook/addon-actions";

export default {
  component: GuideCarousel,
  title: "carousel/GuideCarousel",
  argTypes: {},
} as Meta;

const Template: StoryFn<GuideCarouselProps> = (args) => (
  <GuideCarousel {...args} onNext={action("onNext")} />
);

export const Primary = Template.bind({});
Primary.args = {};
