import * as React from 'react';
import Tooltip from '../../../src/components/tooltip';
import userEvent from '@testing-library/user-event';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'

describe.only('Tooltip', () => {

  let closeLabel: string;
  let description: string | JSX.Element;
  let displayTrigger: 'click' | 'hover';
  let id: string;
  let onHintClose: () => void;
  let placement: 'top' | 'bottom' | 'left' | 'right';
  let visible: boolean;

  beforeEach(() => {
    closeLabel = 'Close';
    description = 'Tooltip';
    displayTrigger = 'click';
    id = 'testId';
    onHintClose = () => null;
    placement = 'bottom';
    visible = false;
  })

  it('should show/hide tooltip when the child element is clicked', async () => {
    displayTrigger = 'click';

    render(
      <Tooltip
        closeLabel={closeLabel}
        description={description}
        displayTrigger={displayTrigger}
        id={id}
        onHintClose={ onHintClose }
        placement={placement}
        visible={visible}
      >
        <button>Tooltip toggles when I am clicked</button>
      </Tooltip>
    );
    
    userEvent.click(screen.getByRole('button', {'name': /tooltip toggles when I am clicked/i}))
    screen.getByText(/tooltip$/i)
    userEvent.click(screen.getByRole('button', {'name': /tooltip toggles when I am clicked/i}))
    await waitForElementToBeRemoved(() => screen.getByText(/tooltip$/i))
  });

  it('should show/hide tooltip when you hover/unhover the child element', async () => {
    displayTrigger = 'hover'

    render(
      <Tooltip
        closeLabel={closeLabel}
        description={description}
        displayTrigger={ displayTrigger }
        id={id}
        onHintClose={ onHintClose }
        placement="top"
        visible={visible}
      >
        <button>Tooltip shows when I am hovered</button>
      </Tooltip>
    );
    
    userEvent.hover(screen.getByRole('button', {'name': /tooltip shows when I am hovered/i}))
    screen.getByText(/tooltip$/i)
    userEvent.unhover(screen.getByRole('button', {'name': /tooltip shows when I am hovered/i}))
    await waitForElementToBeRemoved(() => screen.getByText(/tooltip$/i))
  });

  it('should not show the tooltip when you click or hover over the child element', async () => {
    displayTrigger = undefined

    render(
      <Tooltip
        closeLabel={closeLabel}
        description={description}
        displayTrigger={ displayTrigger }
        id={id}
        onHintClose={ onHintClose }
        placement="top"
        visible={visible}
      >
        <button>Tooltip will never be shown</button>
      </Tooltip>
    );

    let tooltip: HTMLElement;

    userEvent.hover(screen.getByRole('button', {'name': /tooltip will never be shown/i}))
    tooltip = screen.queryByAltText(/tooltip$/i)
    expect(tooltip).not.toBeInTheDocument()
    userEvent.unhover(screen.getByRole('button', {'name': /tooltip will never be shown/i}))

    userEvent.click(screen.getByRole('button', {'name': /tooltip will never be shown/i}))
    tooltip = screen.queryByAltText(/tooltip$/i)
    expect(tooltip).not.toBeInTheDocument()
  });

});
