import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { Toast } from '../../../src/components/toast';
import expect from 'expect'

describe('Toast', () => {

  let closeIcon: boolean;
  let icon: string;
  let message: string;
  let onClickClose: () => void;
  let placement: {
      horizontal: 'center' | 'left' | 'right';
      vertical: 'center' | 'top' | 'bottom';
  };
  let show: boolean;

  beforeEach(() => {
    closeIcon = true;
    icon = 'tk-icon-alert-triangle';
    message = 'Some text';
    onClickClose = () => null;
    placement = {
      horizontal: 'center',
      vertical: 'center',
    };
    show = true;
  })

  it('should not show the toast', () => {
    show = false;

    render(
      <Toast
        closeIcon={closeIcon}
        icon={icon}
        message={message}
        onClickClose={ onClickClose }
        placement={placement}
        show={show}
      />
    );

    const elements = screen.queryAllByText('Some text')
    expect(elements.length).toBe(0)
  });

  it('should show the toast', () => {
    show = true;

    render(
      <Toast
        closeIcon={closeIcon}
        icon={icon}
        message={message}
        onClickClose={ onClickClose }
        placement={placement}
        show={show}
      />
    );

    screen.getByText('Some text')
  });

  it('should close the toast when close cross is clicked', async () => {

    show = true;
    const onClickClose = () => {
      show = !show;
    }

    const component = render(
      <Toast
        closeIcon={closeIcon}
        icon={icon}
        message={message}
        onClickClose={ onClickClose }
        placement={placement}
        show={show}
      />
    );

    screen.getByText('Some text')

    const close = component.container.querySelector('.tk-icon-cross')
    userEvent.click(close)

    await waitForElementToBeRemoved(() => screen.getByText('Some text'))

    // const elements = screen.queryAllByText('Some text')
    // expect(elements.length).toBe(0)
  })

});
