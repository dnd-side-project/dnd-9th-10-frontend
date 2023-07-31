import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { BasedMyCheckList, BasedMyCheckListProps } from './BasedMyCheckList';

export default {
  component: BasedMyCheckList,
  title: 'checklist/BasedMyCheckList',
  argTypes: {},
} as Meta;

const Template: StoryFn<BasedMyCheckListProps> = (args) => <BasedMyCheckList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};