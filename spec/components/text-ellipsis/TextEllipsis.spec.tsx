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
    expect(elements.length).toBe(3)
  });

  it('should not create a tooltip when tooltipOnEllipsis is false', () => {
    render(
      <TextEllipsis tooltipOnEllipsis={false}>
        { 'Really, really, really, really, really, long text that gets cut!' }
      </TextEllipsis>      
    )
    const elements = document.querySelectorAll('span')
    expect(elements.length).toBe(1)
  });

  it('should apply -webkit-line-clamp: 1 by default', () => {
    render(
      <TextEllipsis>
        { 'Really, really, really, really, really, long text that gets cut!' }
      </TextEllipsis>
    )

    const element = screen.queryByText('Really, really, really, really, really, long text that gets cut!')
    expect(element.style['WebkitLineClamp']).toBe('1')
  })

  it('should apply -webkit-line-clamp: 2 when number of rows are 2', () => {
    render(
      <TextEllipsis rows={ 2 }>
        { 'Really, really, really, really, really, long text that gets cut!' }
      </TextEllipsis>
    )

    const element = screen.queryByText('Really, really, really, really, really, long text that gets cut!')
    expect(element.style['WebkitLineClamp']).toBe('2')
  })

});