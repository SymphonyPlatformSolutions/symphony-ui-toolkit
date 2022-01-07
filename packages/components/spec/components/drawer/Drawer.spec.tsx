import * as React from 'react';
import {
  Drawer,
  DrawerTitle,
  DrawerBody,
  DrawerFooter,
} from '../../../src/components';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Drawer', () => {
  it('should render the content with correct class and without crash', async () => {
    const drawerCssClass = 'customDrawerCssClass';
    const titleCssClass = 'customTitleCssClass';
    const bodyCssClass = 'customBodyCssClass';
    const footerCssClass = 'customFooterCssClass';
    const titleText = 'Text in title';
    const bodyText = 'Text in body';
    const footerText = 'Text in footer';
    const { getByText } = render(
      <Drawer className={drawerCssClass} width={350} position="right" hasBackdrop closeButton show>
        <DrawerTitle className={titleCssClass}>{titleText}</DrawerTitle>
        <DrawerBody className={bodyCssClass}>{bodyText}</DrawerBody>
        <DrawerFooter className={footerCssClass}>{footerText}</DrawerFooter>
      </Drawer>
    );

    const backdrop = document.querySelector('tk-drawer-backdrop');
    expect(backdrop).toBeDefined();

    const closeButton = document.querySelector('tk-drawer__close');
    expect(closeButton).toBeDefined();

    // Find Drawer
    const drawer = screen.getByRole('dialog');
    expect(drawer).toBeDefined();
    expect(drawer.classList).toContain('tk-drawer');
    expect(drawer.classList).toContain('tk-drawer--right');

    // DrawerTitle
    const title = getByText(titleText);
    expect(title).toBeDefined();
    expect(title.classList).toContain(titleCssClass);
    expect(title.classList).toContain('tk-drawer__title');

    // DrawerBody
    const body = getByText(bodyText);
    expect(body).toBeDefined();
    expect(body.classList).toContain(bodyCssClass);
    expect(body.classList).toContain('tk-drawer__body');

    // DrawerFooter
    const footer = getByText(footerText);
    expect(footer).toBeDefined();
    expect(footer.classList).toContain(footerCssClass);
    expect(footer.classList).toContain('tk-drawer__footer');
  });

  it('should render without a close button and backdrop', async () => {
    const titleText = 'Text in title';
    const bodyText = 'Text in body';
    const footerText = 'Text in footer';
    render(
      <Drawer width={50} position="left" relativeToWindow={true} show>
        <DrawerTitle>{titleText}</DrawerTitle>
        <DrawerBody>{bodyText}</DrawerBody>
        <DrawerFooter>{footerText}</DrawerFooter>
      </Drawer>
    );

    const backdrop = document.querySelector('tk-drawer-backdrop');
    expect(backdrop).toBeNull();

    const closeButton = document.querySelector('tk-drawer__close');
    expect(closeButton).toBeNull();

    // Find Drawer
    const drawer = screen.getByRole('dialog');
    expect(drawer).toBeDefined();
    expect(drawer.classList).toContain('tk-drawer');
    expect(drawer.classList).toContain('tk-drawer--left');
  });

  it('should render nothing when hidden', () => {
    const titleText = 'Text in title';
    const bodyText = 'Text in body';
    const footerText = 'Text in footer';
    render(
      <Drawer width={250} position="right" hasBackdrop closeButton show={false}>
        <DrawerTitle>{titleText}</DrawerTitle>
        <DrawerBody>{bodyText}</DrawerBody>
        <DrawerFooter>{footerText}</DrawerFooter>
      </Drawer>
    );

    const drawer = screen.queryByRole('dialog');
    expect(drawer).toBeDefined();
    expect(drawer.classList).toContain('tk-drawer-hidden');
  })

  it('should close on click on the close button"', async () => {
    const titleText = 'Text in title';
    const bodyText = 'Text in body';
    const footerText = 'Text in footer';
    let show = true;
    const handleClose = () => { show = false }
    render(
      <Drawer width={250} position="right" closeButton show={show} onClose={handleClose}>
        <DrawerTitle>{titleText}</DrawerTitle>
        <DrawerBody>{bodyText}</DrawerBody>
        <DrawerFooter>{footerText}</DrawerFooter>
      </Drawer>
    );

    // Drawer should be displayed
    const closeButton = document.getElementsByClassName('tk-drawer__close')[0];
    expect(closeButton).toBeDefined();
    expect(show).toBeTruthy();

    fireEvent.click(closeButton);

    // Drawer should be closed
    expect(show).toBeFalsy();
  })

  it('should close on click on the backdrop"', async () => {
    const titleText = 'Text in title';
    const bodyText = 'Text in body';
    const footerText = 'Text in footer';
    let show = true;
    const handleClose = () => { show = false }
    render(
      <Drawer width={250} position="right" hasBackdrop closeButton show={show} onClose={handleClose}>
        <DrawerTitle>{titleText}</DrawerTitle>
        <DrawerBody>{bodyText}</DrawerBody>
        <DrawerFooter>{footerText}</DrawerFooter>
      </Drawer>
    );

    // Drawer should be displayed
    const backdrop = document.getElementsByClassName('tk-drawer-backdrop')[0];
    expect(backdrop).toBeDefined();
    expect(show).toBeTruthy();

    fireEvent.click(backdrop);

    // Drawer should be closed
    expect(show).toBeFalsy();
  })
});
