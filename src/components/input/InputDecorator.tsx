import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useMemo } from 'react';
import classNames from 'classnames';
import shortid from 'shortid';
import LabelTooltipDecorator, {
  LabelTooltipDecoratorProps,
  LabelTooltipDecoratorPropTypes,
} from '../label-tooltip-decorator/LabelTooltipDecorator';

const RightDecoratorsPropTypes = {
  rightDecorators: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

const InputDecoratorPropTypes = {
  ...LabelTooltipDecoratorPropTypes,
  ...RightDecoratorsPropTypes,
};

interface InputDecoratorProps extends LabelTooltipDecoratorProps {
  rightDecorators?: JSX.Element | JSX.Element[];
  children?: React.ReactNode;
}

const InputDecorator: React.FC<InputDecoratorProps> = ({
  rightDecorators,
  label,
  tooltip,
  tooltipCloseLabel,
  showRequired,
  children,
  ...rest
}) => {
  const child = useMemo(
    () => (React.Children.only(children) ? children[0] : null),
    [children]
  );

  // Generate unique ID if not provided
  const inputId = useMemo(() => {
    return child?.props?.id || `tk-input-${shortid.generate()}`;
  }, [child]);

  const tooltipId = useMemo(() => `tk-hint-${shortid.generate()}`, []);

  const disabled = useMemo(() => {
    return child?.props?.disabled;
  }, [child]);

  const childWithId = useMemo(
    () => (child ? React.cloneElement(child, { ...rest, id: inputId }) : null),
    [child]
  );

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
        {childWithId}
        {rightDecorators
          ? Array.isArray(rightDecorators)
            ? rightDecorators.map((decorator) => decorator)
            : rightDecorators
          : null}
      </div>
    </div>
  );
};

InputDecorator.propTypes = InputDecoratorPropTypes;
InputDecorator.displayName = 'InputDecorator';

export default InputDecorator;
