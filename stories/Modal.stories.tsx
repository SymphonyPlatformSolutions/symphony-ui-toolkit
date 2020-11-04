import React from 'react';
import { Button, Icon, Modal, Typography } from '../src/components';
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from '../src/components';

const header = (
  <React.Fragment>
    <hr/>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Icon iconName={'lock'}/>
      <Icon iconName={'call'}/>
      <Icon iconName={'app'}/>
      <Icon iconName={'bot'}/>
    </div>
    <hr/>
  </React.Fragment>
);

const body = (
  <Typography type={'body'}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Typography>
);

const footer = (
  <div>
    <Button variant={'tertiary'}>Cancel</Button>
    <Button variant={'primary'}>Confirm</Button>
  </div>
);

export const SmallModal: React.FC = () => {
  return (
    <Modal size={'small'} closeButton>
      <ModalTitle>Small modal with header</ModalTitle>
      <ModalHeader>{header}</ModalHeader>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </Modal>
  )
};

export const MediumModal: React.FC = () => {
  return (
    <Modal size={'medium'} closeButton>
      <ModalTitle>Medium modal without header</ModalTitle>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </Modal>
  )
};

export const LargeModal: React.FC = () => {
  return (
    <Modal size={'large'} closeButton>
      <ModalTitle>Large modal without header</ModalTitle>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </Modal>
  )
};

export const FullPageModal: React.FC = () => {
  return (
    <Modal size={'full-width'} closeButton>
      <ModalTitle>Full width modal without header</ModalTitle>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </Modal>
  )
};

export default {
  title: 'Modal',
  component: SmallModal,
};
