import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { ChangedThingsModal, ChangedThingsModalProps } from './ChangedThingsModal';

export default {
  component: ChangedThingsModal,
  title: 'modal/ChangedThingsModal',
  argTypes: {},
} as Meta;

const Template: StoryFn<ChangedThingsModalProps> = (args) => <ChangedThingsModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};