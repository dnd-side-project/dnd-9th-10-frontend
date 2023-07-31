import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { DeleteThingsModal, DeleteThingsModalProps } from './DeleteThingsModal';

export default {
  component: DeleteThingsModal,
  title: 'modal/DeleteThingsModal',
  argTypes: {},
} as Meta;

const Template: StoryFn<DeleteThingsModalProps> = (args) => <DeleteThingsModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};