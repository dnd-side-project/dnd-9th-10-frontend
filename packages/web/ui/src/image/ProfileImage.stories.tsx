import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { ProfileImage, ProfileImageProps } from "./ProfileImage";
import { images } from "@dnd9-10/shared/src/libs/images";

export default {
  component: ProfileImage,
  title: "image/ProfileImage",
  argTypes: {},
} as Meta;

const Template: StoryFn<ProfileImageProps> = (args) => (
  <ProfileImage {...args} alt="image" src={images.FIREND_PROFILE1} size={102} />
);

export const Primary = Template.bind({});
Primary.args = {};
