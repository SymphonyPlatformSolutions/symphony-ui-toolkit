import * as React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from '../../../src/components';
import { Keys } from '../../../src/components/common/eventUtils';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

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
});

it('should not propagate mouse down event by default', async () => {
  const onMouseDownParent = jest.fn();
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
  const onMouseDownParent = jest.fn();
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
