import * as React from 'react';
import userEvent from '@testing-library/user-event';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Tooltip } from '../../../src/components/tooltip';
import { Switch } from '../../../src/components';
import SelectionStatus from '../../../src/components/selection/SelectionStatus';

const changeElementText = (element: string, text: string) => {
  const HTMLElement = document.querySelector(element);
  if(HTMLElement) {
    HTMLElement.textContent = text;
  }
};

describe('Tooltip', () => {
  let closeLabel: string;
  let description: string | JSX.Element;
  let displayTrigger: 'click' | 'hover' | undefined;
  let id: string;
  let onHintClose: () => void;
  let placement: 'top' | 'bottom' | 'left' | 'right';
  let visible: boolean;

  const testToolTipId = 'testToolTipId';
  const testTooltipClassname = 'testTooltipClassname';

  beforeEach(() => {
    closeLabel = 'Close';
    description = 'Message appears';
    displayTrigger = 'click';
    id = 'testId';
    onHintClose = () => null;
    placement = 'bottom';
    visible = false;
  });

  it('should show/hide tooltip when the child element is clicked', async () => {
    displayTrigger = 'click';

    render(
      <Tooltip
        closeLabel={closeLabel}
        description={description}
        displayTrigger={displayTrigger}
        id={id}
        onHintClose={onHintClose}
        placement={placement}
      >
        <button>Tooltip toggles when I am clicked</button>
      </Tooltip>
    );

    userEvent.click(
      screen.getByRole('button', { name: /tooltip toggles when I am clicked/i })
    );
    screen.getByText(/appears$/i);
    userEvent.click(
      screen.getByRole('button', { name: /tooltip toggles when I am clicked/i })
    );
    await waitForElementToBeRemoved(() => screen.getByText(/appears$/i));
  });

  test.each([
    [
      '',
      /tooltip shows when I am hovered/i,
      <button key="test1">Tooltip shows when I am hovered</button>,
    ],
    [
      'and even if the child is disabled',
      'Switch',
      <Switch
        key="test2"
        label="Switch"
        name="disabled-switch"
        value="disabled-switch-1"
        status={SelectionStatus.CHECKED}
        disabled
      />,
    ],
  ])(
    'should show/hide tooltip when you hover/unhover the child element %p',
    async (_, text, child) => {
      displayTrigger = 'hover';

      render(
        <Tooltip
          closeLabel={closeLabel}
          description={description}
          displayTrigger={displayTrigger}
          id={id}
          onHintClose={onHintClose}
          placement="top"
        >
          {child}
        </Tooltip>
      );

      userEvent.hover(screen.getByText(text));
      screen.getByText(/appears$/i);
      userEvent.unhover(screen.getByText(text));
      await waitForElementToBeRemoved(() => screen.getByText(/appears$/i));
    }
  );

  it('should not show the tooltip when you click or hover over the child element', async () => {
    displayTrigger = undefined;

    render(
      <Tooltip
        closeLabel={closeLabel}
        description={description}
        displayTrigger={displayTrigger}
        id={id}
        onHintClose={onHintClose}
        placement="top"
        visible={visible}
      >
        <button>Tooltip will never be shown</button>
      </Tooltip>
    );

    let tooltip: HTMLElement | null;

    userEvent.hover(
      screen.getByRole('button', { name: /tooltip will never be shown/i })
    );
    tooltip = screen.queryByText(/appears$/i);
    expect(tooltip).not.toBeInTheDocument();
    userEvent.unhover(
      screen.getByRole('button', { name: /tooltip will never be shown/i })
    );

    userEvent.click(
      screen.getByRole('button', { name: /tooltip will never be shown/i })
    );
    tooltip = screen.queryByText(/appears$/i);
    expect(tooltip).not.toBeInTheDocument();
  });

  it('should propagate onClick to Tooltip children properly when displayTrigger is click', async () => {
    displayTrigger = 'click';

    render(
      <Tooltip
        closeLabel={closeLabel}
        description={description}
        displayTrigger={displayTrigger}
        id={id}
        onHintClose={onHintClose}
        placement="top"
      >
        <button
          id="button"
          onClick={() => changeElementText('#button', 'Text Edited')}
        >
          Tooltip toggles when I am clicked
        </button>
      </Tooltip>
    );

    userEvent.click(
      screen.getByRole('button', { name: /tooltip toggles when I am clicked/i })
    );

    await waitFor(() => {
      expect(screen.getByText(/appears$/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/text edited$/i)).toBeInTheDocument();
    });
  });

  it('should propagate onMouseEnter/onMouseLeave to Tooltip children properly when displayTrigger is hover', async () => {
    displayTrigger = 'hover';

    render(
      <Tooltip
        closeLabel={closeLabel}
        description={description}
        displayTrigger={displayTrigger}
        id={id}
        onHintClose={onHintClose}
        placement="top"
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

    userEvent.hover(
      screen.getByRole('button', { name: /tooltip toggles when I am clicked/i })
    );

    await waitFor(() => {
      expect(screen.getByText(/appears$/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/text hover$/i)).toBeInTheDocument();
    });

    userEvent.unhover(screen.getByRole('button', { name: /text hover/i }));

    await waitForElementToBeRemoved(() => screen.getByText(/appears$/i));

    await waitFor(() => {
      expect(screen.getByText(/text unhover$/i)).toBeInTheDocument();
    });
  });

  it('should show tooltip with delay when you hover the child element', async () => {
    displayTrigger = 'hover';

    render(
      <Tooltip
        closeLabel={closeLabel}
        description={description}
        displayTrigger={displayTrigger}
        id={id}
        onHintClose={onHintClose}
        placement="top"
        hoverDelay={800}
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

    userEvent.hover(
      screen.getByRole('button', { name: /tooltip toggles when I am clicked/i })
    );
    await waitFor(() => {
      expect(screen.getByText(/appears$/i)).toBeInTheDocument();
    });
    userEvent.unhover(screen.getByRole('button', { name: /text hover/i }));
    await waitForElementToBeRemoved(() => screen.getByText(/appears$/i));
  }
  );

  it('should have right classname pass by props.classname', async () => {
    displayTrigger = 'hover';
    
    render(
      <Tooltip
        closeLabel={closeLabel}
        description={description}
        displayTrigger={displayTrigger}
        id={id}
        onHintClose={onHintClose}
        placement="top"
        hoverDelay={800}
        data-testid={testToolTipId}
        className={testTooltipClassname}
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

    userEvent.hover(
      screen.getByRole('button', { name: /tooltip toggles when I am clicked/i })
    );
    await waitFor(() => {
      expect(screen.getByTestId(testToolTipId).classList.contains(testTooltipClassname)).toBe(true);
    });
  }
  );
});
