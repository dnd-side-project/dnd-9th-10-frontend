import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { NewDiaryAnalysisCard, NewDiaryAnalysisCardProps } from './NewDiaryAnalysisCard';

export default {
  component: NewDiaryAnalysisCard,
  title: 'card/NewDiaryAnalysisCard',
  argTypes: {},
} as Meta;

const Template: StoryFn<NewDiaryAnalysisCardProps> = (args) => <NewDiaryAnalysisCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};