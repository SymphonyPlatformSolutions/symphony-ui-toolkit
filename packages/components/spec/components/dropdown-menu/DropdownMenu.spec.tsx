import * as React from 'react';
import userEvent, { specialChars } from '@testing-library/user-event';
import { DropdownMenu, DropdownMenuDivider, DropdownMenuItem } from '../../../src/components';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

describe('DropdownMenu', () => {

  it('should render with the correct classes without crash', () => {
    render(<DropdownMenu>
      <DropdownMenuItem>Hello world</DropdownMenuItem>
      <DropdownMenuDivider/>
      <DropdownMenuItem>Hello people</DropdownMenuItem>
    </DropdownMenu>)
    const dropdownMenu = screen.getByRole('menu');
    expect(dropdownMenu).toBeInTheDocument();
    expect(dropdownMenu).toHaveClass('tk-dropdown-menu')

    const divider = dropdownMenu.querySelector('.tk-dropdown-menu-divider');
    expect(divider).toBeInTheDocument();

    const menuItems = dropdownMenu.querySelectorAll('.tk-dropdown-menu__item');
    expect(menuItems).toHaveLength(2);
  });

  it('should call onClose when clicking outside of it', () => {
    const close = vi.fn();
    render(
      <div>
        <div>some other div</div>
        <DropdownMenu show={true} onClose={close}>
          <DropdownMenuItem>Hello world</DropdownMenuItem>
        </DropdownMenu>
      </div>
    ) ;
    expect(screen.getByText('Hello world')).toBeDefined();
    fireEvent.click(getByText(document.body, 'some other div'));
    expect(close).toHaveBeenCalled();
  });

  it('shouldn\'t call onClose when clicking outside if show=false', () => {
    const close = vi.fn();
    render(
      <div>
        <div>some other div</div>
        <DropdownMenu show={false} onClose={close}>
          <DropdownMenuItem>Hello world</DropdownMenuItem>
        </DropdownMenu>
      </div>
    ) ;
    fireEvent.click(getByText(document.body, 'some other div'));
    expect(close).not.toHaveBeenCalled();
  });

  it('should close the menu when pressing esc key', () => {
    const close = vi.fn();
    render(
      <div>
        <div>some other div</div>
        <DropdownMenu show={true} onClose={close}>
          <DropdownMenuItem>Hello world</DropdownMenuItem>
        </DropdownMenu>
      </div>
    ) ;
    expect(screen.getByText('Hello world')).toBeDefined();
    // click to get focus
    fireEvent.click(document.body);
    fireEvent.keyUp(document.body, {key: 'Escape', code: 'Escape'});
    expect(close).toHaveBeenCalled();
  });

  it('should move focus between options by pressing arrow down/up on the current option', () => {
    render(
      <DropdownMenu show={true}>
        <DropdownMenuItem data-testid={'option_1'}>Option 1</DropdownMenuItem>
        <DropdownMenuItem data-testid={'option_2'}>Option 2</DropdownMenuItem>
      </DropdownMenu>
    )

    userEvent.type(screen.getByTestId('option_1'), specialChars.arrowDown);
    expect(screen.getByTestId('option_2')).toHaveFocus();

    userEvent.type(screen.getByTestId('option_2'), specialChars.arrowUp);
    expect(screen.getByTestId('option_1')).toHaveFocus();

    // reaches the end
    userEvent.type(screen.getByTestId('option_1'), specialChars.arrowUp);
    expect(screen.getByTestId('option_2')).toHaveFocus();
  })

  it('should call onClick when pressing enter on an option', () => {
    const onClick = vi.fn();
    render(
      <DropdownMenu show={true}>
        <DropdownMenuItem data-testid={'option_1'} onClick={onClick}>Option 1</DropdownMenuItem>
      </DropdownMenu>
    )

    userEvent.type(screen.getByTestId('option_1'), specialChars.enter);
    expect(onClick).toHaveBeenCalled();
  })

  it('shouldn\'t call onClick if menu item is loading', () => {
    const onClick = vi.fn();
    render(
      <DropdownMenu show>
        <DropdownMenuItem data-testid="option_1" onClick={onClick} loading>Option 1</DropdownMenuItem>
      </DropdownMenu>
    )

    userEvent.type(screen.getByTestId('option_1'), specialChars.enter);
    expect(onClick).not.toHaveBeenCalled();
  })
})
