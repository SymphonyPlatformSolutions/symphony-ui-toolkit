import * as React from 'react';
import { components } from 'react-select';
import * as PropTypes from 'prop-types';
import Icon from '../icon';

/**
 * Useful to stop propagating on mouse down events in custom renderers
 * This way Dropdown won't be opened with custom delete
 * @param e Propagated event
 */
const stopPropagation = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

/** The following components are defined to override
 * the appereace of the react-select library components **/

export const DefaultOptionRenderer = (props: any) => {
  const OptionRenderer = props?.selectProps?.optionRenderer;
  const rendererProps = { data: props.data };
  return (
    <div>
      {OptionRenderer ? (
        <components.Option {...props}>
          <OptionRenderer {...rendererProps} />
        </components.Option>
      ) : (
        <components.Option {...props} />
      )}
    </div>
  );
};

export const SingleValue = (props: any) => {
  const OptionRenderer = props.selectProps.optionRenderer;
  const rendererProps = { data: props.data };
  return (
    <div>
      {OptionRenderer ? (
        <components.SingleValue {...props}>
          <OptionRenderer {...rendererProps} />
        </components.SingleValue>
      ) : (
        <components.SingleValue {...props} />
      )}
    </div>
  );
};

export const DefaultTagRenderer = (props: any) => {
  const TagRender = props.selectProps?.tagRenderer;
  const rendererProps = { remove: props.removeProps.onClick, data: props.data };
  return (
    <div>
      {TagRender ? (
        <components.MultiValue {...props} className="tk-tag">
          <div onMouseDown={stopPropagation}>
            <TagRender {...rendererProps} />
          </div>
        </components.MultiValue>
      ) : (
        <components.MultiValue {...props}>
          <div onMouseDown={stopPropagation}>
            <span className="tk-pr-1">{props.data?.label}</span>
            <Icon
              iconName="cross"
              onClick={() => props.removeProps.onClick()}
            />
          </div>
        </components.MultiValue>
      )}
    </div>
  );
};

export const MultiValueContainerOverride = ({ children, ...props }: any) => {
  return (
    <components.MultiValueContainer {...props}>
      <div>{children}</div>
    </components.MultiValueContainer>
  );
};

export const MultiValueRemove = () => {
  return null;
};

export const DropdownIndicator = (props: any) => {
  return (
    <div>
      {props?.selectProps?.isMulti ? (
        <div>
          {props?.selectProps?.isMulti &&
          props?.selectProps?.displayArrowIndicator ? (
            <components.DropdownIndicator {...props} />
          ) : (
            <components.DropdownIndicator {...props} className="tk-d-none" />
          )}
        </div>
      ) : (
        <components.DropdownIndicator {...props}>
          <Icon
            iconName={props?.selectProps.menuIsOpen ? 'drop-up' : 'drop-down'}
            className="tk-select__single-value"
          ></Icon>
        </components.DropdownIndicator>
      )}
    </div>
  );
};

export const ClearIndicator = (props: any) => {
  return (
    <components.ClearIndicator {...props}>
      <Icon iconName="cross-round"></Icon>
    </components.ClearIndicator>
  );
};

export const Control = ({ children, ...props }: any) => {
  const iconName = props.selectProps.iconName;
  return (
    <div className="tk-input-group__header">
      {<label className="tk-label tk-mb-h">{props?.selectProps?.label}</label>}
      {iconName ? (
        <components.Control {...props} className="tk-input__container">
          <div className="tk-input__icon">
            <Icon iconName={iconName} tabIndex={0}></Icon>
          </div>
          {children}
        </components.Control>
      ) : (
        <components.Control {...props}>{children}</components.Control>
      )}
    </div>
  );
};
//
// export const Input = (props: any) => {
//   const onKeyUp = props?.selectProps?.onKeyUp;
//   return <components.Input {...props} onKeyUp={onKeyUp} />;
// };

export const TimeInput = (props) => {
  // const hoursKeyEvent = props?.selectProps?.hoursKeyEvent;
  const hours = props?.selectProps?.hours;
  const setHours = props?.selectProps?.setHours;
  const minutes = props?.selectProps?.minutes;
  const setMinutes = props?.selectProps?.setMinutes;
  const seconds = props?.selectProps?.seconds;
  const setSeconds = props?.selectProps?.setSeconds;

  const keyDownHandler = (event, setter) => {
    console.log('hoursKeyDown !!!! ', event);
    if (event.keyCode === 38) {
      setter(event.target.value ? parseInt(event.target.value, 10) + 1 : 0);
    } else if (event.keyCode === 40) {
      setter(event.target.value ? parseInt(event.target.value, 10) - 1 : 0);
    }
  };

  return (
    <div>
      <components.Input
        className={'TextInput'}
        {...props}
        value={`${hours}:${minutes}:${seconds}`}
      />
      <input
        aria-label="Hour"
        autoComplete="off"
        value={hours}
        max="12"
        min="1"
        name="hour12"
        type="number"
        onChange={(event) =>
          setHours
            ? setHours(
                event.target.value ? parseInt(event.target.value, 10) : 0
              )
            : null
        }
        onKeyDown={(event) => keyDownHandler(event, setHours)}
      />
      <span>:</span>
      <input
        aria-label="Minute"
        autoComplete="off"
        value={minutes}
        max="59"
        min="0"
        name="minute"
        type="number"
        onChange={(event) =>
          setMinutes
            ? setMinutes(
                event.target.value ? parseInt(event.target.value, 10) : 0
              )
            : null
        }
        onKeyDown={(event) => keyDownHandler(event, setMinutes)}
      />
      <span>:</span>
      <input
        aria-label="Second"
        autoComplete="off"
        value={seconds}
        max="59"
        min="0"
        name="second"
        type="number"
        onChange={(event) =>
          setSeconds
            ? setSeconds(
                event.target.value ? parseInt(event.target.value, 10) : 0
              )
            : null
        }
        onKeyDown={(event) => keyDownHandler(event, setSeconds)}
      />
    </div>
  );
};
TimeInput.propTypes = {
  setHours: PropTypes.func,
  hours: PropTypes.number,
  setMinutes: PropTypes.func,
  minutes: PropTypes.number,
  setSeconds: PropTypes.func,
  seconds: PropTypes.number,
  innerProps: PropTypes.any,
};
