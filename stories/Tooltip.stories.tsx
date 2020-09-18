import React, { useState } from 'react';
import { Tooltip } from '../src/components';
import Icon from '../src/components/icon';

export default {
  title: 'Tooltip',
  component: Tooltips,
};

export const Tooltips = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [showTooltipIcon, setShowTooltipIcon] = useState(true);

  const handleClick = () => {
    setShowTooltip(!showTooltip);
  };

  const handleClickIcon = () => {
    setShowTooltipIcon(!showTooltipIcon);
  };

  return (
    <div className="tk-text-color">
      <h1>Tooltip</h1>
      <h2>Standard</h2>
      <div style={{ margin: '100px 150px 0 50px' }}>
        <Tooltip description={'Some text'} visible={true} placement={'top'}>
          <input type="text" name="fname" />
        </Tooltip>
      </div>
      <h2>With a close action</h2>
      <div style={{ margin: '50px 150px 50px 50px' }}>
        <Tooltip
          description={'Some text'}
          visible={showTooltip}
          placement={'right'}
          closeLabel={'Close'}
          onHintClose={handleClick}
        >
          <input type="text" name="fname" />
        </Tooltip>
      </div>
      <h2>With a show/hide action</h2>
      <p>Click on the icon</p>
      <div style={{ margin: '120px 0 50px 120px' }}>
        <Tooltip
          description={'Some text'}
          visible={showTooltipIcon}
          closeLabel={'Close'}
          onHintClose={handleClickIcon}
        >
          <Icon iconName="info-round" handleClick={handleClickIcon} />
        </Tooltip>
      </div>
      <h2>Can be attached to anything</h2>
      <p>You can find below some examples</p>
      <div style={{ margin: '100px 150px 0 100px' }}>
        <Tooltip description={'Attached to a button'} visible={true}>
          <button className={'test'} type={'button'}>
            A button
          </button>
        </Tooltip>
      </div>
      <div style={{ margin: '100px 0 0 50px' }}>
        <Tooltip description={'Attached to a text field'} visible={true}>
          <input type="text" name="textTextField" />
        </Tooltip>
      </div>
      <div style={{ margin: '100px 150px 0 0' }}>
        <Tooltip description={'Attached to a text area'} visible={true}>
          <textarea id="w3review" name="w3review" rows="4" cols="50">
            Some text
          </textarea>
        </Tooltip>
      </div>
      <div style={{ margin: '100px 150px 0 100px' }}>
        <Tooltip description={'Attached to a date picker'} visible={true}>
          <input type="date" id="birthday" name="birthday" />
        </Tooltip>
      </div>
      <div style={{ margin: '100px 150px 0 100px' }}>
        <Tooltip description={'Attached to an image'} visible={true}>
          <img src="https://symphony.com/wp-content/uploads/2019/06/logo.png" />
        </Tooltip>
      </div>
      <h2>Tooltip Placements</h2>
      <div style={{ margin: '50px 150px 0 150px' }}>
        <Tooltip description={'A text'} visible={true} placement={'top'}>
          <button className={'test'} type={'button'}>
            A button
          </button>
        </Tooltip>
      </div>
      <div style={{ margin: '50px' }}>
        <Tooltip description={'Some text'} visible={true} placement={'right'}>
          <button className={'test'} type={'button'}>
            A button
          </button>
        </Tooltip>
      </div>
      <div style={{ margin: '80px 50px 50px 250px' }}>
        <Tooltip description={'Some text'} visible={true} placement={'left'}>
          <button style={{ marginRight: '0' }} type={'button'}>
            A button
          </button>
        </Tooltip>
      </div>
      <div style={{ margin: '0 200px 100px' }}>
        <Tooltip description={'Some text'} visible={true} placement={'bottom'}>
          <button type={'button'}>A button</button>
        </Tooltip>
      </div>
    </div>
  );
};
