import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import Tooltip from '../../../src/components/tooltip';

const changeElementText = (element: string, text: string) => {
  const HTMLElement = document.querySelector(element)
  HTMLElement.textContent = text
}

describe('Tooltip', () => {

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
    tooltip = screen.queryByText(/tooltip$/i)
    expect(tooltip).not.toBeInTheDocument()
    userEvent.unhover(screen.getByRole('button', {'name': /tooltip will never be shown/i}))

    userEvent.click(screen.getByRole('button', {'name': /tooltip will never be shown/i}))
    tooltip = screen.queryByText(/tooltip$/i)
    expect(tooltip).not.toBeInTheDocument()
  });

  it('should propagate onClick to Tooltip children properly when displayTrigger is click', async () => {
    displayTrigger = 'click'
    const changeButtonText = () => {
      const button = document.querySelector('#button')
      button.textContent = 'Text Edited'
    }

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
        <button id="button" onClick={changeButtonText}>Tooltip toggles when I am clicked</button>
      </Tooltip>
    );

    userEvent.click(screen.getByRole('button', {'name': /tooltip toggles when I am clicked/i}))

    await waitFor(() => {
      expect(screen.getByText(/tooltip$/i)).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByText(/text edited$/i)).toBeInTheDocument()
    })
  })

  it('should propagate onClick to Tooltip children properly when displayTrigger is click', async () => {
    displayTrigger = 'click'

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
        <button
          id="button"
          onClick={() => changeElementText('#button', 'text edited')}
        >
          Tooltip toggles when I am clicked
        </button>
      </Tooltip>
    );

    userEvent.click(screen.getByRole('button', {'name': /tooltip toggles when I am clicked/i}))

    await waitFor(() => {
      expect(screen.getByText(/tooltip$/i)).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByText(/text edited$/i)).toBeInTheDocument()
    })
  })

  it('should propagate onMouseEnter/onMouseLeave to Tooltip children properly when displayTrigger is hover', async () => {
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
        <button
          id="button"
          onMouseEnter={() => changeElementText('#button', 'text hover')}
          onMouseLeave={() => changeElementText('#button', 'text unhover')}
        >
          Tooltip toggles when I am clicked
        </button>
      </Tooltip>
    );

    userEvent.hover(screen.getByRole('button', {'name': /tooltip toggles when I am clicked/i}))

    await waitFor(() => {
      expect(screen.getByText(/tooltip$/i)).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByText(/text hover$/i)).toBeInTheDocument()
    })

    userEvent.unhover(screen.getByRole('button', {'name': /text hover/i}))

    await waitForElementToBeRemoved(() => screen.getByText(/tooltip$/i))

    await waitFor(() => {
      expect(screen.getByText(/text unhover$/i)).toBeInTheDocument()
    })
  })

});
