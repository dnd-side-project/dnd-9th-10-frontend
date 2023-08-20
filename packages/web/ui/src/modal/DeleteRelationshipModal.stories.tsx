import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import Button from "../button/Button";
import {
  DeleteRelationshipModal,
  DeleteRelationshipModalProps,
} from "./DeleteRelationshipModal";
import styles from "./DeleteRelationshipModal.module.css";

export default {
  component: DeleteRelationshipModal,
  title: "modal/DeleteRelationshipModal",
  argTypes: {},
} as Meta;

const Template: StoryFn<DeleteRelationshipModalProps> = (args) => (
  <DeleteRelationshipModal
    {...args}
    TriggerComponent={
      <Button className={styles["trigger-button"]}>친구생성</Button>
    }
  />
);

export const Primary = Template.bind({});
Primary.args = {};
