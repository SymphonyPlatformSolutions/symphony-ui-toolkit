import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react'
import { Toast } from '../../../src/components/toast';
import expect from 'expect'

describe('Toast', () => {

  let closeIcon: boolean;
  let content: JSX.Element | string;
  let leftIcon: string;
  let onClickClose: () => void;
  let placement: {
      horizontal: 'center' | 'left' | 'right';
      vertical: 'center' | 'top' | 'bottom';
  };
  let show: boolean;

  beforeEach(() => {
    closeIcon = true;
    leftIcon = 'alert-triangle';
    content = 'Some text';
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
        leftIcon={leftIcon}
        content={content}
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
        leftIcon={leftIcon}
        content={content}
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

    const { container, rerender } = render(
      <Toast
        closeIcon={closeIcon}
        leftIcon={leftIcon}
        content={content}
        onClickClose={ onClickClose }
        placement={placement}
        show={show}
      />
    );

    screen.getByText('Some text')

    const close = container.querySelector('.tk-icon-cross')
    userEvent.click(close)

    rerender(
      <Toast
        closeIcon={closeIcon}
        leftIcon={leftIcon}
        content={content}
        onClickClose={ onClickClose }
        placement={placement}
        show={show}
      />
    )

    const elements = screen.queryAllByText('Some text')
    expect(elements.length).toBe(0)
  })

});
