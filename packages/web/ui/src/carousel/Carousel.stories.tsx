import { StoryFn, Meta } from "@storybook/react";
import { Carousel, CarouselProps } from "./Carousel";

export default {
  component: Carousel,
  title: "carousel/Carousel",
  argTypes: {},
} as Meta;

const Template: StoryFn<CarouselProps> = (args) => {
  return (
    <Carousel {...args}>
      <div style={{ width: "120px" }}>1</div>
      <div style={{ width: "200px" }}>2</div>
      <div style={{ width: "500px" }}>3</div>
      <div style={{ width: "300px" }}>4</div>
      <div style={{ width: "200px" }}>5</div>
    </Carousel>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
