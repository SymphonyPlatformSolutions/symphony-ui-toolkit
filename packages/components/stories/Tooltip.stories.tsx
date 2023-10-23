import '../src/styles';
import './stories.css';

import * as React from 'react';
import { useState } from 'react';
import { Switch, Tooltip } from '../src/components';
import { SvgIcon } from '../src/components/icon';
import { InfoRound } from '../src/components/icons';
import SelectionStatus from '../src/components/selection/SelectionStatus';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  argTypes: {
    placement: {
      control: {
        type: 'inline-radio',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
    children: { control: { disable: true } },
  },
  component: Tooltip,
  decorators: [
    (Story) => (
      <div style={{ margin: '150px auto', textAlign: 'center' }}>
        {Story()}
      </div>
    ),
  ],
  title: 'Components/Tooltip',
} satisfies Meta<typeof Tooltip>;
      
export default meta;
type Story = StoryObj<typeof Tooltip>

// eslint-disable-next-line react/display-name
const addExplanation = (explanation) => (Story) => (
  <div>
    <p>{explanation}</p>
    {Story()}
  </div>
);

export const Standard: Story = {
  args: {
    children: <input type="text" name="fname" onChange={ undefined } />,
    description: 'Some text',
    placement: 'top',
    visible: true,
  },
  render: (args) => {
    const [showTooltip, setShowTooltip] = useState(true);
    const handleClick = () => setShowTooltip(!showTooltip);
    return <Tooltip visible={showTooltip} onHintClose={handleClick} {...args} />;
  }
}

export const WithACloseAction: Story = {
  args: {
    description: 'Some text',
    placement: 'top',
    closeLabel: 'Close',
    children: <input type="text" name="fname" onChange={ undefined } />,
  },
  render: (args) => {
    const [showTooltip, setShowTooltip] = useState(true);
    const handleClick = () => setShowTooltip(!showTooltip);      
    return <Tooltip visible={showTooltip} onHintClose={handleClick} {...args} />;
  }
}

export const Variants: Story = {
  render: () => <> 
    <Tooltip visible={true} type="tooltip" placement="bottom" description={'Some text'}/>
    <p className="tk-mt-5">Tooltip variant</p>
  </>
}

export const ShowHide: Story = {
  args: {
    description: 'Toggle the visibility of the Tooltip in the Controls tab',
    placement: 'top',
    visible: true,
    children: <input type="text" name="fname" onChange={ undefined } />,
  },
  argTypes: {
    placement: { control: { disable: true } },
  },
  render: (args) => {
    const [showTooltip, setShowTooltip] = useState(true);
    const handleClick = () => setShowTooltip(!showTooltip);
    return <Tooltip visible={showTooltip} onHintClose={handleClick} {...args} />;
  }
}

export const OnClick: Story = {
  args: {
    description: 'Click on the icon',
    displayTrigger: 'click',
    closeLabel: 'Close',
    placement: 'top',
    children: <button type={'button'}>A button</button>,
  },
  decorators: [addExplanation('Click the icon to see the tooltip')],
  render: (args) => <Tooltip {...args}>
    <SvgIcon icon={InfoRound}/>
  </Tooltip>
}

export const OnHover: Story = {
  args: {
    children: <button type={'button'}>A button</button>,
    description: 'Message appears on hover',
    displayTrigger: 'hover',
    placement: 'top',
  },
  decorators: [addExplanation('Hover the icon to see the tooltip')],
  render: (args) => {
    return (
      <>
        <Tooltip {...args}>
          <SvgIcon icon={InfoRound} />
        </Tooltip>
        
        <p>...displaying as well when the child is disabled</p>
        <Tooltip {...args}>
          <Switch
            label="Switch"
            name="disabled-switch"
            value="disabled-switch-1"
            status={SelectionStatus.CHECKED}
            disabled
          />
        </Tooltip>
        <p>displaying with a configurable delay: </p>
        <Tooltip {...args} hoverDelay={800}>
          <Switch
            label="Delayed Tooltip"
            name="delayed-switch"
            value="delayed-switch-1"
            status={SelectionStatus.CHECKED}
          />
        </Tooltip>
      </>
    );
  }
}

export const OnAButton: Story = {
  args: {
    description: 'Attached on a button',
    placement: 'top',
    children: <button type={'button'}>A button</button>,
  },
  render: (args) => {
    const [showTooltip, setShowTooltip] = useState(true);
    const handleClick = () => setShowTooltip(!showTooltip);
    return <Tooltip visible={showTooltip} onHintClose={handleClick} {...args} />;
  }
}

export const OnATextField: Story = {
  args: {
    description: 'Attached on a text field',
    placement: 'top',
    children: <input type="text" name="textTextField" onChange={ undefined } />,
  },
  render: (args) => {
    const [showTooltip, setShowTooltip] = useState(true);
    const handleClick = () => setShowTooltip(!showTooltip);
    return <Tooltip visible={showTooltip} onHintClose={handleClick} {...args} />;
  }
}

export const OnATextArea: Story = {
  args: {
    description: 'Attached on a text area',
    placement: 'top',
    children: <textarea name="aTextArea" rows={4} cols={50} defaultValue="Some text"/>,
  },
  render: (args) => {
    const [showTooltip, setShowTooltip] = useState(true);
    const handleClick = () => setShowTooltip(!showTooltip);
    return <Tooltip visible={showTooltip} onHintClose={handleClick} {...args} />;
  }
}

export const OnAnIcon: Story = {
  args: {
    description: 'Attached on an icon',
    placement: 'top',
    children: <SvgIcon icon={InfoRound} />,
  },
  render: (args) => {
    const [showTooltip, setShowTooltip] = useState(true);
    const handleClick = () => setShowTooltip(!showTooltip);
    return <Tooltip visible={showTooltip} onHintClose={handleClick} {...args} />;
  }
}

export const OnADatePicker: Story = {
  args: {
    description: 'Attached on a date picker',
    placement: 'top',
    children: <input type="date" id="meeting" name="meeting" onChange={ undefined } />,
  },
  render: (args) => {
    const [showTooltip, setShowTooltip] = useState(true);
    const handleClick = () => setShowTooltip(!showTooltip);
    return <Tooltip visible={showTooltip} onHintClose={handleClick} {...args} />;
  }
}

export const OnAnImage: Story = {
  args: {
    description: 'Attached on an image',
    placement: 'top',
    children: (
      <img
        style={{ width: '225px', height: '40px' }}
        src="https://symphony.com/wp-content/uploads/2019/06/logo.png"
      />
    ),
  },
  render: (args) => {
    const [showTooltip, setShowTooltip] = useState(true);
    const handleClick = () => setShowTooltip(!showTooltip);
    return <Tooltip visible={showTooltip} onHintClose={handleClick} {...args} />;
  }
}

export const MultipleChildren: Story = {
  args: {
    description: 'Tooltip for both children',
    displayTrigger: 'hover',
    placement: 'top'
  },
  render: (args) => {
    return (
      <div>
        <Tooltip {...args}>
          <p>First paragraph</p>
          <p>Second paragraph</p>
        </Tooltip>
      </div>
    )
  }
}
