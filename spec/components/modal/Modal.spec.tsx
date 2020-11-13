import * as React from 'react';
import { mount } from 'enzyme';
import { Modal } from '../../../src/components';
import { ModalBody, ModalHeader } from '../../../src/components/modal/Modal';

describe('Modal', () => {
  it('should render the content with correct class and without crash', () => {
    const wrapper = mount(
      <Modal size={'small'}>
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
});
