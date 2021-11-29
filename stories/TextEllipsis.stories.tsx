import * as React from 'react';
import { Icon, TextEllipsis } from '../src/components';

export default {
  title: 'Components/Text Ellipsis',
  component: TextEllipsis,
  argTypes: {
    tooltipProps: {
      description: 'See props in Tooltip',
    },
    rows: {
      control: {
        type: 'number',
      },
    },
  },
};

interface StoryBackgroundProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const StoryBackground: React.FC<StoryBackgroundProps> = (
  props: StoryBackgroundProps
) => (
  <div
    style={{
      background: 'grey',
      margin: '16px 0',
      padding: 16,
      width: 350,
      ...props.style,
    }}
  >
    {props.children}
  </div>
);

// eslint-disable-next-line react/display-name
const addExplanation = (explanation) => (Story) => (
  <>
    <p>{explanation}</p>
    <Story />
  </>
);

const Template = (args) => {
  return (
    <>
      <h4>1 row ellipse - tooltip on hover</h4>
      <StoryBackground>
        <TextEllipsis rows={1} {...args}>
          Really, really, really, really, really, really, long text that gets
          cut!
        </TextEllipsis>
      </StoryBackground>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children:
    'Really, really, really, really, really, really, long text that gets cut!',
  rows: 1,
};

export const EllipseAfterTwoRows: React.FC = () => (
  <StoryBackground>
    <TextEllipsis rows={2}>
      Really, really, really, really, really, really, really, really, really,
      really, really, really, really, really, really, really, really, long text
      that gets cut!
    </TextEllipsis>
  </StoryBackground>
);

export const EllipseAContinuousString: React.FC = () => (
  <StoryBackground>
    <TextEllipsis>
      A really longcontinuousstringthatseeminglyneverends
    </TextEllipsis>
  </StoryBackground>
);

export const EllipseAContinuousStringTwoRows = () => (
  <StoryBackground>
    <TextEllipsis rows={2}>
      A really, really, long string that wraps two rows and ends with a
      longcontinuousstringthatseeminglyneverends
    </TextEllipsis>
  </StoryBackground>
);

EllipseAContinuousStringTwoRows.decorators = [
  addExplanation(
    'A known limitation of TextEllipsis is if the last word of a multi-line ellipsis is a continuous string it will ellipse before the end.'
  ),
];

export const TooltipNotAffectingStyling = () => {
  return (
    <StoryBackground style={{ display: 'flex' }}>
      <TextEllipsis
        rows={1}
        tooltipProps={{
          wrapperClassName: 'text-ellipsis-tooltip',
        }}
      >
        Icon should be pushed to the right
      </TextEllipsis>
      <Icon iconName="community" style={{ paddingLeft: 8 }}></Icon>
    </StoryBackground>
  );
};

TooltipNotAffectingStyling.decorators = [
  addExplanation(
    "Use the tooltip prop 'wrapperClassName' to change the styling of the wrapping tooltip element"
  ),
];
