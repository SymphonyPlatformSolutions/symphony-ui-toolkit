import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import Icon from '../icon';
import Tooltip from '../tooltip';
import classNames from 'classnames';

type LabelTooltipDecoratorProps = {
  id?: string;
  label?: string;
  placement?: 'top' | 'bottom' | 'right' | 'left';
  tooltip?: string | JSX.Element;
  tooltipCloseLabel?: string;
  showRequired?: boolean;
};

const LabelTooltipDecoratorHeader = styled.div`
  display: flex;
  align-items: center;
`;

const LabelTooltipDecoratorTooltip = styled.div`
  display: inline-block;
  margin-left: auto;
  font-size: 16px;
`;
const LabelTooltipDecoratorPropTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  tooltipCloseLabel: PropTypes.string,
};

const LabelTooltipDecorator: React.FC<LabelTooltipDecoratorProps> = ({
  id,
  label,
  placement,
  tooltip,
  tooltipCloseLabel,
  showRequired
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const classes = classNames(
    'tk-label',
    {'tk-label--required': showRequired},
  )

  return label || tooltip ? (
    <LabelTooltipDecoratorHeader className="tk-input-group__header">
      {label ? (
        <label className={classes} htmlFor={id}>
          {label}
        </label>
      ) : null}
      {tooltip ? (
        <LabelTooltipDecoratorTooltip>
          <Tooltip
            id={id}
            description={tooltip}
            closeLabel={tooltipCloseLabel}
            onHintClose={() => setShowTooltip(false)}
            visible={showTooltip}
            placement={placement || 'top'}
          >
            <Icon iconName="info-round" onClick={() => setShowTooltip(!showTooltip)} />
          </Tooltip>
        </LabelTooltipDecoratorTooltip>
      ) : null}
    </LabelTooltipDecoratorHeader>
  ) : null;
};

LabelTooltipDecorator.propTypes = {
  ...LabelTooltipDecoratorPropTypes,
};

export default LabelTooltipDecorator;
