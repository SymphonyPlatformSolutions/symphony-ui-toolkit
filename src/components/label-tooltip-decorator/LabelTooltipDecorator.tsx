import * as React from 'react';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import Icon from '../icon';
import Tooltip from '../tooltip';

type LabelTooltipDecoratorProps = {
  id?: string;
  label?: string;
  placement?: 'top' | 'bottom' | 'right' | 'left';
  tooltip?: string;
  tooltipCloseLabel?: string;
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
  tooltip: PropTypes.string,
  tooltipCloseLabel: PropTypes.string,
};

const LabelTooltipDecorator: React.FC<LabelTooltipDecoratorProps> = ({
  id,
  label,
  placement,
  tooltip,
  tooltipCloseLabel,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClickIcon = useCallback(() => {
    setShowTooltip(!showTooltip);
  }, [showTooltip]);

  return label || tooltip ? (
    <LabelTooltipDecoratorHeader className="tk-input-group__header">
      {label ? (
        <label className="tk-label" htmlFor={id}>
          {label}
        </label>
      ) : null}
      {tooltip ? (
        <LabelTooltipDecoratorTooltip>
          <Tooltip
            id={id}
            description={tooltip}
            closeLabel={tooltipCloseLabel}
            onHintClose={handleClickIcon}
            visible={showTooltip}
            placement={placement || 'top'}
          >
            <Icon iconName="info-round" onClick={handleClickIcon} />
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
