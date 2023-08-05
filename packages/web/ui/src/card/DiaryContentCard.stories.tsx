import { StoryFn, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import Icon from "../icon/Icon";
import * as Toolbar from "@radix-ui/react-toolbar";
import { DiaryContentCard, DiaryContentCardProps } from "./DiaryContentCard";

export default {
  component: DiaryContentCard,
  title: "card/DiaryContentCard",
  argTypes: {},
} as Meta;

const Template: StoryFn<DiaryContentCardProps> = (args) => (
  <DiaryContentCard
    {...args}
    content="testestset"
    TooltipComponent={
      <Toolbar.Root>
        <Toolbar.Button>
          <Icon name="sticker" />
        </Toolbar.Button>
        <Toolbar.Button>
          <Icon name="modify" />
        </Toolbar.Button>
        <Toolbar.Button>
          <Icon name="checked" />
        </Toolbar.Button>
        <Toolbar.Button>
          <Icon name="remove" />
        </Toolbar.Button>
      </Toolbar.Root>
    }
  />
);

export const Primary = Template.bind({});
Primary.args = {};
