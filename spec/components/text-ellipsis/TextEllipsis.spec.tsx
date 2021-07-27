import * as React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import { TextEllipsis } from '../../../src/components';

describe('TextEllipsis', () => {

  it('should create a tooltip when tooltipOnEllipsis is true', () => {
    render(
      <TextEllipsis rows={ 1 }>
        { 'Really, really, really, really, really, long text that gets cut!' }
      </TextEllipsis>
    )
    const elements = document.querySelectorAll('span')
    expect(elements.length).toBe(2)
  });

  it('should not create a tooltip when tooltipOnEllipsis is false', () => {
    render(
      <TextEllipsis tooltipOnEllipsis={false}>
        { 'Really, really, really, really, really, long text that gets cut!' }
      </TextEllipsis>      
    )
    const elements = document.querySelectorAll('span')
    expect(elements.length).toBe(0)
  });

  it('should apply tk-text-ellipsis--multiple-rows when number of rows are more than 1', () => {
    render(
      <TextEllipsis rows={ 2 }>
        { 'Really, really, really, really, really, long text that gets cut!' }
      </TextEllipsis>
    )

    const element = screen.queryByText('Really, really, really, really, really, long text that gets cut!')
    element.classList.contains('tk-text-ellipsis--multiple-rows')
  })

});