import * as React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import { TextEllipsis } from '../../../src/components';

describe.only('TextEllipsis', () => {

  it('should apply tk-text-ellipsis--multiple-rows when number of rows are more than 1', () => {
    render(
      <TextEllipsis rows={ 2 } tooltipPlacement="bottom">
        { 'Really, really, really, really, really, long text that gets cut!' }
      </TextEllipsis>
    )

    const element = screen.queryByText('Really, really, really, really, really, long text that gets cut!')
    element.classList.contains('tk-text-ellipsis--multiple-rows')
  })

});