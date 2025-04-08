import * as React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from '../../../src/components';
import { Keys } from '../../../src/components/common/eventUtils';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('Modal', () => {
  it('should render the content with correct class and without crash', () => {
    const mainCssClass = 'customMainCssClass';
    const titleCssClass = 'customTitleCssClass';
    const headerCssClass = 'customHeaderCssClass';
    const bodyCssClass = 'customBodyCssClass';
    const footerCssClass = 'customFooterCssClass';
    const titleText = 'Text in title';
    const headerText = 'Text in header';
    const bodyText = 'Text in body';
    const footerText = 'Text in footer';
    const { getByText } = render(
      <Modal size={'small'} className={mainCssClass} show >
        <ModalTitle className={titleCssClass}>{titleText}</ModalTitle>
        <ModalHeader className={headerCssClass}>{headerText}</ModalHeader>
        <ModalBody className={bodyCssClass}>{bodyText}</ModalBody>
        <ModalFooter className={footerCssClass}>{footerText}</ModalFooter>
      </Modal>
    );

    const backdrop = document.querySelector('tk-dialog-backdrop');
    expect(backdrop).toBeDefined();

    // Find Modal
    const modal = screen.getByRole('dialog');
    expect(modal).toBeDefined();
    expect(modal.classList).toContain('tk-dialog');
    expect(modal.classList).toContain('tk-dialog--small');

    // ModalTitle
    const title = getByText(titleText);
    expect(title).toBeDefined();
    expect(title.classList).toContain(titleCssClass);
    expect(title.classList).toContain('tk-dialog__title');

    // ModalHeader
    const header = getByText(headerText);
    expect(header).toBeDefined();
    expect(header.classList).toContain(headerCssClass);
    expect(header.classList).toContain('tk-dialog__header');

    // ModalBody
    const body = getByText(bodyText);
    expect(body).toBeDefined();
    expect(body.classList).toContain(bodyCssClass);
    expect(body.classList).toContain('tk-dialog__body');

    // ModalFooter
    const footer = getByText(footerText);
    expect(footer).toBeDefined();
    expect(footer.classList).toContain(footerCssClass);
    expect(footer.classList).toContain('tk-dialog__footer');
  });

  it('should render nothing', () => {
    const titleText = 'Text in title';
    const headerText = 'Text in header';
    const bodyText = 'Text in body';
    const footerText = 'Text in footer';
    const { queryByText } = render(
      <Modal size={'small'}>
        <ModalTitle>{titleText}</ModalTitle>
        <ModalHeader>{headerText}</ModalHeader>
        <ModalBody>{bodyText}</ModalBody>
        <ModalFooter>{footerText}</ModalFooter>
      </Modal>
    );

    const modal = screen.queryByRole('dialog');
    expect(modal).toBeNull();

    expect(queryByText(titleText)).toBeNull();
    expect(queryByText(headerText)).toBeNull();
    expect(queryByText(bodyText)).toBeNull();
    expect(queryByText(footerText)).toBeNull();
  });

  it('should close the Modal on "Esc"', async () => {
    let show = true;
    const handleClose = () => { show = false }
    render(<Modal size={'small'} show={show} onClose={handleClose}>
      <ModalHeader>Hello, World</ModalHeader>
      <ModalBody>Some text</ModalBody>
    </Modal>);

    // Modal should be displayed
    const title = screen.getByText('Hello, World');
    expect(title).toBeTruthy();
    expect(show).toBeTruthy();

    const eventMock = {
      key: Keys.ESC,
    };

    // 'ESC' key in the Modal
    fireEvent.keyUp(title, eventMock);

    // Modal should be closed
    expect(show).toBeFalsy();
  })

  it('should not propagate mouse down event by default', async () => {
    const onMouseDownParent = vi.fn();
    const component = <div className="parent" onMouseDown={onMouseDownParent}>
      <Modal size={'small'} show>
        <ModalTitle>Title</ModalTitle>
        <ModalHeader>Header</ModalHeader>
        <ModalBody>Body</ModalBody>
      </Modal>
    </div>;
    render(component);
    fireEvent.mouseDown(screen.getByText('Title'))
    expect(onMouseDownParent).not.toHaveBeenCalled();
  });

  it('should allow to propagate mouse down event', async () => {
    const onMouseDownParent = vi.fn();
    const component = <div className="parent" onMouseDown={onMouseDownParent}>
      <Modal size={'small'} show onMouseDown={undefined}>
        <ModalTitle>Title</ModalTitle>
        <ModalHeader>Header</ModalHeader>
        <ModalBody>Body</ModalBody>
      </Modal>
    </div>;
    render(component);
    fireEvent.mouseDown(screen.getByText('Title'))
    expect(onMouseDownParent).toHaveBeenCalled();
  });

  describe('should handle focus', () => {
    const component = <div>
      <a href="#">Another element that should not be on focus</a>
      <Modal size={'small'} show={true}>
        <ModalHeader>Hello, World</ModalHeader>
        <ModalBody>
          <Button variant={'primary'}>Button 1</Button>
          <Button variant={'primary'}>Button 2</Button>
          <Button variant={'primary'}>Button 3</Button>
        </ModalBody>
      </Modal>
    </div>;

    test('by setting the focus on the first element when the modal is opened', async () => {
      render(component);

      const firstButton = screen.getByText('Button 1');

      // Check if the first focusable element (First Button) is focused
      expect(firstButton).toHaveFocus()
    });

    test('by trapping the focus with Tab key', async () => {
      const { getByText } = render(component);

      const firstButton = getByText('Button 1');
      const secondButton = getByText('Button 2');
      const thirdButton = getByText('Button 3');

      expect(firstButton).toHaveFocus()

      // Press Tab key
      userEvent.tab();
      expect(secondButton).toHaveFocus();

      // Press Tab key
      userEvent.tab();
      expect(thirdButton).toHaveFocus()

      // Press Tab key
      userEvent.tab();

      // Verify that focus cycles back to the first button
      expect(firstButton).toHaveFocus()
    });

    test('by trapping the focus with Shift+Tab key', async () => {
      const { getByText } = render(component);

      const firstButton = getByText('Button 1');
      const secondButton = getByText('Button 2');
      const thirdButton = getByText('Button 3');

      expect(firstButton).toHaveFocus()

      // Press Shift+Tab key
      userEvent.tab({ shift: true });

      // Verify that focus cycles back to the last button
      expect(thirdButton).toHaveFocus();

      // Press Shift+Tab key
      userEvent.tab({ shift: true });
      expect(secondButton).toHaveFocus()

      // Press Shift+Tab key
      userEvent.tab({ shift: true });
      expect(firstButton).toHaveFocus()
    });
  })
});