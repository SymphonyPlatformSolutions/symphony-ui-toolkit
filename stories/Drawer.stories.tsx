import * as React from 'react';
import {
  Button,
  Typography,
} from '../src/components';
import { Drawer, DrawerBody, DrawerFooter, DrawerTitle } from '../src/components/drawer';

const Template = (args) => {
  const parent = document.querySelector('div.docs-story') || document.body;
  return (
    <Drawer {...args} parentNode={parent}>
      <DrawerTitle>{makeTitle('Drawer Title')}</DrawerTitle>
      <DrawerBody>{body}</DrawerBody>
      <DrawerFooter>{footer}</DrawerFooter>
    </Drawer>
  );
};

export const Main = Template.bind({});
Main.args = { show: true, relativeToWindow: false };

const makeTitle = (text) => (<h4 style={{ margin: '0' }}>{text}</h4>);

const body = (
  <Typography type={'body'}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est l aborum.
  </Typography>
);

const footer = (
  <>
    <Button variant={'tertiary'}>Cancel</Button>
    <Button variant={'primary'}>Confirm</Button>
  </>
);

export const RightDrawer: React.FC = () => {
  return (
    <Drawer width={350} position={'right'} closeButton show>
      <DrawerTitle>{makeTitle('Drawer placed on the right')}</DrawerTitle>
      <DrawerBody>{body}</DrawerBody>
      <DrawerFooter>{footer}</DrawerFooter>
    </Drawer>
  );
};

export const OverflowingDrawer: React.FC = () => {
  return (
    <Drawer width={350} position={'right'} closeButton show>
      <DrawerTitle>{makeTitle('Drawer with overflowing body')}</DrawerTitle>
      <DrawerBody>{body}{body}{body}</DrawerBody>
      <DrawerFooter>{footer}</DrawerFooter>
    </Drawer>
  );
};

export const DrawerWithoutHeader: React.FC = () => {
  return (
    <Drawer width={350} position={'right'} closeButton show>
      <DrawerBody><div>Drawer without header</div>{body}</DrawerBody>
      <DrawerFooter>{footer}</DrawerFooter>
    </Drawer>
  );
};

export const LeftDrawer: React.FC = () => {
  return (
    <Drawer width={350} position={'left'} closeButton show>
      <DrawerTitle>{makeTitle('Drawer placed on the left')}</DrawerTitle>
      <DrawerBody>{body}</DrawerBody>
      <DrawerFooter>{footer}</DrawerFooter>
    </Drawer>
  );
};

export const CustomCssClassDrawer: React.FC = () => {
  return (
    <Drawer width={350} position={'right'} className={'myDrawerClass'} closeButton show>
      <DrawerTitle className={'myDrawerTitleClass'}>{makeTitle('Drawer with additional custom CSS classes')}</DrawerTitle>
      <DrawerBody className={'myDrawerBodyClass'}>{body}</DrawerBody>
      <DrawerFooter className={'myDrawerFooterClass'}>{footer}</DrawerFooter>
    </Drawer>
  );
};

export const DrawerWithCloseHandler: React.FC = () => {
  const [show, setShow] = React.useState(true);
  const handleClose = () => { setShow(false) }
  return (
    <div>
      <div style={{ marginLeft: '10px' }}>
        <Button onClick={() => setShow(!show)}>{show ? 'Close' : 'Open'} the Drawer</Button>
      </div>
      <Drawer width={350} position="right" closeButton show={show} onClose={handleClose}>
        <DrawerTitle>{makeTitle('Right drawer with onClose prop')}</DrawerTitle>
        <DrawerBody>{body}</DrawerBody>
        <DrawerFooter>
          <Button variant={'tertiary'} onClick={handleClose}>Cancel</Button>
          <Button variant={'primary'} onClick={handleClose}>Confirm</Button>
        </DrawerFooter>
      </Drawer>
    </div>
  );
};

export const LeftDrawerWithCloseHandler: React.FC = () => {
  const [show, setShow] = React.useState(true);
  const handleClose = () => { setShow(false) }
  return (
    <div>
      <div style={{ float: 'right', marginRight: '10px' }}>
        <Button onClick={() => setShow(!show)}>{show ? 'Close' : 'Open'} the Drawer</Button>
      </div>
      <Drawer width={350} position="left" closeButton show={show} onClose={handleClose}>
        <DrawerTitle>{makeTitle('Left drawer with onClose prop')}</DrawerTitle>
        <DrawerBody>{body}</DrawerBody>
        <DrawerFooter>
          <Button variant={'tertiary'} onClick={handleClose}>Cancel</Button>
          <Button variant={'primary'} onClick={handleClose}>Confirm</Button>
        </DrawerFooter>
      </Drawer>
    </div>
  );
};


export const DrawerWithCloseHandlerAndBackdrop: React.FC = () => {
  const [show, setShow] = React.useState(true);
  const handleClose = () => { setShow(false) }
  return (
    <div>
      <div style={{ marginLeft: '10px' }}>
        <Button onClick={() => setShow(!show)}>{show ? 'Close' : 'Open'} the Drawer</Button>
      </div>
      <Drawer width={350} position="right" hasBackdrop closeButton show={show} onClose={handleClose}>
        <DrawerTitle>{makeTitle('Drawer with onClose prop and backdrop')}</DrawerTitle>
        <DrawerBody>{body}</DrawerBody>
        <DrawerFooter>
          <Button variant={'tertiary'} onClick={handleClose}>Cancel</Button>
          <Button variant={'primary'} onClick={handleClose}>Confirm</Button>
        </DrawerFooter>
      </Drawer>
    </div>
  );
};

export default {
  title: 'Components/Drawer',
  component: Drawer,
  decorators: [
    (Story) => (
      <div style={{ minHeight: '600px', position: 'relative', overflow: 'hidden', border: '1px solid lightgrey' }}>
        <div style={{ marginLeft: '10px' }}><p>Page content</p></div>
        <Story />
      </div>
    ),
  ],
};
