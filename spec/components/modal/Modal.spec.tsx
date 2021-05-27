import * as React from 'react';
import { mount } from 'enzyme';
import { Modal } from '../../../src/components';
import { ModalBody, ModalHeader } from '../../../src/components/modal/Modal';
import { Keys } from '../../../src/components/common/keyUtils';

import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

describe('Modal', () => {
  it('should render the content with correct class and without crash', () => {
    const wrapper = mount(
      <Modal size={'small'} show>
        <ModalHeader>Hello, World</ModalHeader>
        <ModalBody>Some text</ModalBody>
      </Modal>
    );
    expect(wrapper.find('Modal').length).toBe(1);
    expect(wrapper.children().hasClass('tk-dialog-backdrop')).toBe(true);
    expect(wrapper.children().children().hasClass('tk-dialog tk-dialog--small')).toBe(true);
    expect(wrapper.find('ModalHeader').text()).toBe('Hello, World');
    expect(wrapper.find('ModalHeader').children().hasClass('tk-dialog__header')).toBe(true);
    expect(wrapper.find('ModalBody').text()).toBe('Some text');
    expect(wrapper.find('ModalBody').children().hasClass('tk-dialog__body')).toBe(true);
  })
  it('should render nothing', () => {
    const wrapper = mount(
      <Modal size={'small'}>
        <ModalHeader>Hello, World</ModalHeader>
        <ModalBody>Some text</ModalBody>
      </Modal>
    );

    expect(wrapper.find('Modal').children().length).toBe(0);
    expect(wrapper.find('ModalHeader').length).toBe(0);
    expect(wrapper.find('ModalBody').length).toBe(0);
  })
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

    const eventMock = {
      key: Keys.ESC,
    };

    // 'ESC' key in the Modal
    fireEvent.keyUp(title, eventMock);

    // Modal should be closed
    expect(show).toBeFalsy();
  })
});
