import React from 'react';
import { Button, Icon, Modal, Typography } from '../src/components';

export const SmallModal: React.FC = () => {
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

  return (
    <Modal
      size={'small'}
      title={'Small Modal with header'}
      header={header}
      body={body}
      footer={footer}
    />
  )
};

export const MediumModal: React.FC = () => {
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

  return (
    <Modal
      size={'medium'}
      title={'Medium Modal without header'}
      body={body}
      footer={footer}
    />
  )
};

export const LargeModal: React.FC = () => {
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

  return (
    <Modal
      size={'large'}
      title={'Large Modal without header'}
      body={body}
      footer={footer}
    />
  )
};

export const FullPageModal: React.FC = () => {
  const body = (
    <Typography type={'body'}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
  )
  const footer = (
    <div>
      <Button variant={'tertiary'}>Cancel</Button>
      <Button variant={'primary'}>Confirm</Button>
    </div>
  )
  return (
    <Modal
      size={'full-width'}
      title={'Full Page Modal'}
      body={body}
      footer={footer}
    />
  )
};

export default {
  title: 'Modal',
  component: SmallModal,
};
