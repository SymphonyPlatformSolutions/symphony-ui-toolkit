import * as React from 'react';
import { useState } from 'react';
import { Button, CropContent, ExpandableCard, Modal, ModalBody, ModalFooter, ModalTitle } from '../../src/components';

export const PortalTemplate = (args) => {
  const { title, component } = args;

  const [show, setShow] = useState(false);
  const handleClose = () => { setShow(false) }

  return <div style={{ minHeight: '160px' }}>
    <h2 className="tk-mt-5h">Menu in a Portal</h2>
    <p>{'We expose a menuPortalTarget prop, that lets you portal the dropdown menu to a dom node of your choosing.'}</p>
    <ul>
      <li><strong>menuPortalTarget</strong>: Whether the menu should use a portal, and where it should attach.
        <p>In this example, we attached the Menu to the document.body</p>
      </li>
      <li><strong>menuShouldBlockScroll</strong>: Whether to block scroll events when the menu is open.
        <p>ℹ️ Displaying the menu in a portal causes the menu to stay fixed in place and not scroll with the parent container.Therefore this can appear as a bug, to solve this behaviour we advise you to block the scroll when the menu is open.</p>
      </li>
      <li><strong>menuPortalStyles</strong>: Custom styles applied on menu portal.
        <p>ℹ️ The menu is displayed by using some JSS (CSS in JS), but you can overwrite the inline CSS properties by using this attribute.</p>
      </li>
    </ul>
    <h4>Inside a Card</h4>
    <ExpandableCard
      initCollapsed={false}
      header={'The component inside the Expandable Card use a portal to render'}
    >
      <CropContent className="tk-quote-container" >
        {component}
      </CropContent>
    </ExpandableCard>
    <h4>Inside a Modal</h4>
    <Button onClick={() => setShow(true)}>Open Modal</Button>
    <Modal size="medium" closeButton show={show} onClose={handleClose}>
      <ModalTitle>{title}</ModalTitle>
      <ModalBody>
        {component}
      </ModalBody>
      <ModalFooter>
        <Button variant={'tertiary'} onClick={handleClose}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
};

