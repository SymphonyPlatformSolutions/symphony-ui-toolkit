import * as React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import { TextEllipsis } from '../../../src/components';

describe('TextEllipsis', () => {

  it('should apply -webkit-line-clamp: 1 by default', () => {
    render(
      <TextEllipsis>
        { 'Really, really, really, really, really, long text that gets cut!' }
      </TextEllipsis>
    )

    const element = screen.queryByText('Really, really, really, really, really, long text that gets cut!')
    expect(element?.style['WebkitLineClamp']).toBe('1')
  })

  it('should apply -webkit-line-clamp: 2 when number of rows are 2', () => {
    render(
      <TextEllipsis rows={ 2 }>
        { 'Really, really, really, really, really, long text that gets cut!' }
      </TextEllipsis>
    )

    const element = screen.queryByText('Really, really, really, really, really, long text that gets cut!')
    expect(element?.style['WebkitLineClamp']).toBe('2')
  })

  describe('Tooltip', () => {

    it('should create a tooltip when tooltipOnEllipsis is true', () => {
      const { container } = render(
        <TextEllipsis rows={ 1 }>
          { 'Really, really, really, really, really, long text that gets cut!' }
        </TextEllipsis>
      )
      expect(container.querySelector('.tk-tooltip__wrapper')).toBeDefined()
    });
  
    it('should not create a tooltip when tooltipOnEllipsis is false', () => {
      const { container } = render(
        <TextEllipsis tooltipOnEllipsis={false}>
          { 'Really, really, really, really, really, long text that gets cut!' }
        </TextEllipsis>
      )
      expect(container.querySelector('.tk-tooltip__wrapper')).toBeNull();
    });

    it('should not create a tooltip when props.children and props.tooltipProps.description are not set', () => {
      const { container } = render(
        <TextEllipsis tooltipOnEllipsis={true}>
          { null }
        </TextEllipsis>
      )
      expect(container.querySelector('.tk-tooltip__wrapper')).toBeNull();
    })

    it('should create a tooltip when props.children is not set and props.tooltipProps.description is set', () => {
      const { container } = render(
        <TextEllipsis tooltipOnEllipsis={true} tooltipProps={{ description: 'Test' }}>
          { null }
        </TextEllipsis>
      )
      expect(container.querySelector('.tk-tooltip__wrapper')).toBeDefined();
    })

  });

});