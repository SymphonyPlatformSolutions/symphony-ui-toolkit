import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useMemo } from 'react';
import classNames from 'classnames';
import shortid from 'shortid';
import LabelTooltipDecorator, {
  LabelTooltipDecoratorProps,
  LabelTooltipDecoratorPropTypes,
} from '../label-tooltip-decorator/LabelTooltipDecorator';
// import { HasValidationProps } from '../validation/interfaces';
// import { HasTooltipProps } from '../tooltip/interfaces';

//import { HasValidationProps } from '../validation/interfaces';

const RightDecoratorsPropTypes = {
  rightDecorators: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

const InputDecoratorPropTypes = {
  ...LabelTooltipDecoratorPropTypes,
  ...RightDecoratorsPropTypes,
  //onChange: PropTypes.func,
};

interface InputDecoratorProps extends LabelTooltipDecoratorProps {
  // HasValidationProps;
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
