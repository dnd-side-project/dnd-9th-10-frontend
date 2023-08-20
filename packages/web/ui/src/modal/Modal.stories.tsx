import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Modal, ModalProps } from "./Modal";

export default {
  component: Modal,
  title: "modal/Modal",
  argTypes: {},
} as Meta;

const Template: StoryFn<ModalProps> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
