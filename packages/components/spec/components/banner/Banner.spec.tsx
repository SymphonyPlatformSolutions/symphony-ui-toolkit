import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { Banner, BannerType } from '../../../src/components';

describe('Banner', () => {

  const actionMock = jest.fn();
  const closeMock = jest.fn();

  const infoValue = BannerType.INFO;

  it('should render a default banner (neutral, no action, no close)', () => {

    const props = {
      'data-testid': 'banner',
      content: 'aContent',
    }

    const helper = render(<Banner {...props} />);

    expect(helper.getByTestId(props['data-testid'])).toHaveClass(`tk-banner--${infoValue}`);
    expect(helper.getByTestId(props['data-testid'])).toHaveClass('tk-banner--medium');
    expect(helper.getByText(props.content)).toBeInTheDocument();
    expect(helper.container.querySelector('[class*="tk-banner__action"]')).not.toBeInTheDocument();
    expect(helper.container.querySelector('[class*="tk-banner__close"]')).not.toBeInTheDocument();

  });

  it('should not render if show is false', () => {

    const props = {
      'data-testid': 'banner',
      content: 'aContent',
      show: false,
    }

    const helper = render(<Banner {...props} />);

    expect(helper.queryByTestId(props['data-testid'])).not.toBeInTheDocument();
    expect(helper.queryByText(props.content)).not.toBeInTheDocument();

  });

  it('should render the action button if provided', () => {

    const props = {
      'data-testid': 'banner',
      content: 'aContent',
      actionText: 'anAction',
      onAction: actionMock,
    }

    const helper = render(<Banner {...props} />);

    expect(helper.getByText(props.actionText)).toBeInTheDocument();

  });

  it('should call the action handler on action clicked', async () => {

    const props = {
      'data-testid': 'banner',
      content: 'aContent',
      actionText: 'anAction',
      onAction: actionMock,
    }

    const helper = render(<Banner {...props} />);

    userEvent.click(helper.getByText(props.actionText));

    await waitFor(() => {
      expect(actionMock).toHaveBeenCalledTimes(1);
    });

  });

  it('should render the close button if isClosable', () => {

    const props = {
      'data-testid': 'banner',
      content: 'aContent',
      isClosable: true,
      onClose: closeMock,
    }

    const helper = render(<Banner {...props} />);

    expect(helper.container.querySelector('[class*="tk-banner__close"]')).toBeInTheDocument();

  });

  it('should call the close handler on close clicked', async () => {

    const props = {
      'data-testid': 'banner',
      content: 'aContent',
      isClosable: true,
      onClose: closeMock,
    }

    const helper = render(<Banner {...props} />);

    userEvent.click(helper.container.querySelector('[class*="tk-banner__close"]'));

    await waitFor(() => {
      expect(closeMock).toHaveBeenCalledTimes(1);
    });

  });

  it('should apply a classname if provided', () => {

    const props = {
      'data-testid': 'banner',
      content: 'aContent',
      className: 'aClassName'
    }

    const helper = render(<Banner {...props} />);

    expect(helper.getByTestId(props['data-testid'])).toHaveClass(props.className);
  });

  it.each(Object.values(BannerType))(
    'should render the variant "%s"',
    (variant: BannerType) => {

      const props = {
        'data-testid': 'banner',
        content: 'aContent',
        variant,
      }

      const helper = render(<Banner {...props} />);

      expect(helper.getByTestId(props['data-testid'])).toHaveClass(`tk-banner--${variant}`);
    }
  )
});
