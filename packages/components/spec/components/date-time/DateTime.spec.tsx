import * as React from 'react';
import { render } from '@testing-library/react';
import { DateTime } from '../../../src/components';
import { DateTimeFormat } from '../../../src/components/date-time/interfaces';

describe('DateTime', () => {
  const testDate = new Date(2024, 11, 30, 17, 30, 15);
  const locale = 'en-US';

  const defaultProps = {
    date: testDate,
    locale,
  };

  describe('date', () => {
    it('should handle Date objects', () => {
      const { container } = render(<DateTime {...defaultProps} />);
      expect(container).toHaveTextContent('12/30/2024 05:30 PM');
    });

    it('should handle ISO string dates', () => {
      const dateISOString = testDate.toISOString();
      const { container } = render(
        <DateTime {...defaultProps} date={dateISOString} />
      );
      expect(container).toHaveTextContent('12/30/2024 05:30 PM');
    });
  });

  describe('format', () => {
    it('should display date and time by default', () => {
      const { container } = render(<DateTime {...defaultProps} />);
      expect(container).toHaveTextContent('12/30/2024 05:30 PM');
    });

    it('should display date only', () => {
      const { container } = render(
        <DateTime {...defaultProps} format={DateTimeFormat.DATE} />
      );
      expect(container).toHaveTextContent('12/30/2024');
    });

    it('should display time only', () => {
      const { container } = render(
        <DateTime {...defaultProps} format={DateTimeFormat.TIME} />
      );
      expect(container).toHaveTextContent('05:30 PM');
    });

    it('should display time with seconds', () => {
      const { container } = render(
        <DateTime {...defaultProps} format={DateTimeFormat.TIME_SECS} />
      );
      expect(container).toHaveTextContent('05:30:15 PM');
    });
  });

  describe('locale', () => {
    it('should format date according to locale', () => {
      const { container } = render(
        <DateTime {...defaultProps} locale="fr-FR" />
      );
      expect(container).toHaveTextContent('30/12/2024 17:30');
    });

    it('should use browser locale when not specified', () => {
      const { container } = render(<DateTime date={testDate} />);
      expect(container.textContent).toBeTruthy();
    });
  });

  describe('dateFormat', () => {
    it('should use custom date format when provided', () => {
      const { container } = render(
        <DateTime
          {...defaultProps}
          format={DateTimeFormat.DATE}
          dateFormat="yyyy.MM.dd"
        />
      );
      expect(container).toHaveTextContent('2024.12.30');
    });
  });

  describe('timeFormat', () => {
    it('should use custom time format when provided', () => {
      const { container } = render(
        <DateTime
          {...defaultProps}
          format={DateTimeFormat.TIME}
          timeFormat="HH:mm"
        />
      );
      expect(container).toHaveTextContent('17:30');
    });
  });

  describe('show12HourTime', () => {
    it('should display time in 24-hour format when show12HourTime is false', () => {
      const { container } = render(
        <DateTime
          {...defaultProps}
          format={DateTimeFormat.TIME}
          show12HourTime={false}
        />
      );
      expect(container).toHaveTextContent('17:30');
    });

    it('should display time in 12-hour format when show12HourTime is true', () => {
      const { container } = render(
        <DateTime
          {...defaultProps}
          format={DateTimeFormat.TIME}
          show12HourTime={true}
        />
      );
      expect(container).toHaveTextContent('05:30 PM');
    });
  });
});
