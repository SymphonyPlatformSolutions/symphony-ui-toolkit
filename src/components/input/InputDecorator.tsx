import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useMemo } from 'react';
import classNames from 'classnames';
import shortid from 'shortid';
import LabelTooltipDecorator, {
  LabelTooltipDecoratorProps,
} from '../label-tooltip-decorator/LabelTooltipDecorator';

interface InputDecoratorProps {
  children?: React.ReactNode;
  rightDecorators?: JSX.Element | JSX.Element[];
}

const InputDecorator: React.FC<
  InputDecoratorProps & LabelTooltipDecoratorProps
> = ({
  rightDecorators,
  label,
  tooltip,
  tooltipCloseLabel,
  showRequired,
  children,
}) => {
  let child;

  if (React.Children.count(children) === 0) {
    console.error('The Input decorator requires one child component.');
  } else if (React.Children.count(children) > 1) {
    console.error(
      `The Input decorator can wrap only one component. Found: ${React.Children.count(
        children
      )}`,
      children
    );
  } else {
    child = React.Children.only(children);
  }

  // Generate unique ID if not provided
  const inputId = useMemo(() => {
    return child.id || `tk-input-${shortid.generate()}`;
  }, [child.id]);

  const tooltipId = useMemo(() => `tk-hint-${shortid.generate()}`, []);

  const disabled = useMemo(() => {
    return child.props.disabled;
  }, [child]);

  child = React.cloneElement(child as any, {
    id: inputId,
  });

  return (
    <div
      className={classNames('tk-input-group', {
        'tk-input-group--disabled': disabled,
      })}
      style={{ display: 'inline-block' }}
    >
      <LabelTooltipDecorator
        id={tooltipId}
        htmlFor={inputId}
        label={label}
        placement={'top'}
        tooltip={tooltip}
        tooltipCloseLabel={tooltipCloseLabel}
        showRequired={showRequired}
      />
      <div
        className={classNames('tk-input__container', {
          'tk-input__container--disabled': disabled,
        })}
      >
        {child}
        {rightDecorators
          ? Array.isArray(rightDecorators)
            ? rightDecorators.map((decorator) => decorator)
            : rightDecorators
          : null}
      </div>
    </div>
  );
};

export default InputDecorator;
