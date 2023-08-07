import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import Button from "../button/Button";
import { DeleteThingsModal, DeleteThingsModalProps } from "./DeleteThingsModal";
import styles from "./DeleteThingsModal.module.css";

export default {
  component: DeleteThingsModal,
  title: "modal/DeleteThingsModal",
  argTypes: {},
} as Meta;

const Template: StoryFn<DeleteThingsModalProps> = (args) => (
  <DeleteThingsModal
    {...args}
    TriggerComponent={
      <Button className={styles["trigger-button"]}>친구생성</Button>
    }
  />
);

export const Primary = Template.bind({});
Primary.args = {};
