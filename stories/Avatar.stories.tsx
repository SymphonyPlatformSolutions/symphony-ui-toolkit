import * as React from 'react';
import { Avatar, Icon, BasicIndicator, AvatarBadge } from '../src/components';
import './styles/avatar.stories.css';

const img1 = require('./static/avatar.png');
const img2 = require('./static/avatar1.png');
const img3 = require('./static/avatar2.png');

const Template = (args) => {
  return (
    <Avatar {...args}>
      <img src={img1} alt="avatar" />
    </Avatar>
  );
};

export const Default = Template.bind({});

Default.args = {
  size: 'large',
  variant: 'square',
};

export const SquaredAvatar: React.FC = () => {
  return (
    <div>
      <h2>Squared avatars</h2>
      <div className="flex-row">
        <div className="flex-col">
          <Avatar variant="square" size="large">
            <img src={img1} alt="avatar" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="square" size="large">
            <img src={img2} alt="avatar" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="square" size="large">
            <img src={img3} alt="avatar" />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export const RoundedAvatar: React.FC = () => {
  return (
    <div>
      <h2>Rounded avatars</h2>
      <div className="flex-row">
        <div className="flex-col">
          <Avatar variant="round" size="large">
            <img src={img1} alt="avatar" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="large">
            <img src={img2} alt="avatar" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="large">
            <img src={img3} alt="avatar" />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export const BorderedAvatar: React.FC = () => {
  return (
    <div>
      <h2>Bordered avatars</h2>
      <div className="flex-row">
        <div className="flex-col">
          <Avatar variant="square" size="xlarge" bordered>
            <img src={img1} alt="avatar" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="square" size="xlarge" bordered>
            AB
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="square" size="xlarge" bordered>
            <Icon iconName="call" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="xlarge" bordered>
            <img src={img3} alt="avatar" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="xlarge" bordered>
            AB
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="xlarge" bordered>
            <Icon iconName="call" />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export const AvatarSizes: React.FC = () => {
  return (
    <div>
      <h2>Avatar Sizes</h2>
      <div className="flex-row">
        <div className="flex-col">
          <Avatar variant="round" size="xxlarge" bordered>
            <img src={img3} alt="avatar" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="xlarge" bordered>
            <img src={img3} alt="avatar" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="large" bordered>
            <img src={img3} alt="avatar" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="medium" bordered>
            <img src={img3} alt="avatar" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="small" bordered>
            <img src={img3} alt="avatar" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="xsmall" bordered>
            <img src={img3} alt="avatar" />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export const AvatarWithTopBadge: React.FC = () => {
  return (
    <div>
      <h2>Badge on the top</h2>
      <div className="flex-row">
        <div className="flex-col">
          <Avatar variant="round" size="xxlarge" bordered>
            <img src={img1} alt="avatar" />
            <BasicIndicator position="top" variant="attention" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="xlarge" bordered>
            <img src={img2} alt="avatar" />
            <BasicIndicator position="top" variant="ok" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="large" bordered>
            <img src={img3} alt="avatar" />
            <BasicIndicator position="top" variant="warning" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="medium" bordered>
            <img src={img1} alt="avatar" />
            <BasicIndicator position="top" variant="attention" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="small" bordered>
            <img src={img2} alt="avatar" />
            <BasicIndicator position="top" variant="ok" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="xsmall" bordered>
            <img src={img3} alt="avatar" />
            <BasicIndicator position="top" variant="warning" />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export const AvatarWithBottomBadge: React.FC = () => {
  return (
    <div>
      <h2>Badge at the bottom</h2>
      <div className="flex-row">
        <div className="flex-col">
          <Avatar variant="round" size="xxlarge" bordered>
            <img src={img1} alt="avatar" />
            <BasicIndicator position="bottom" variant="attention" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="xlarge" bordered>
            <img src={img2} alt="avatar" />
            <BasicIndicator position="bottom" variant="ok" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="large" bordered>
            <img src={img3} alt="avatar" />
            <BasicIndicator position="bottom" variant="warning" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="medium" bordered>
            <img src={img1} alt="avatar" />
            <BasicIndicator position="bottom" variant="attention" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="small" bordered>
            <img src={img2} alt="avatar" />
            <BasicIndicator position="bottom" variant="ok" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="xsmall" bordered>
            <img src={img3} alt="avatar" />
            <BasicIndicator position="bottom" variant="warning" />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export const AvatarWithAdvancedBadge: React.FC = () => {
  return (
    <div>
      <h2>Advanced use cases</h2>
      <p>
        To have a specific shapes for the Avatar component you can create your
        own clip-plath and include as a url. Use a svg with the class
        &lsquo;tk-avatar__clip-path&rsquo; for your own clip-path and reference
        the svg ID on the avatar. See the examples below.
      </p>
      <h3>Icon badge</h3>
      <div className="flex-row">
        <div className="flex-col">
          <Avatar size="xxlarge" variant="round">
            <svg
              className="tk-avatar__clip-path"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <clipPath id="avatar_badge" clipPathUnits="objectBoundingBox">
                <path
                  id="avatar-presence-clip-path"
                  d="M 0.6635 0.9727 C 0.6594 0.9478 0.6563 0.9156 0.6563 0.875 C 0.6563 0.8159
                    0.6628 0.77460.6696 0.7478 C 0.6793 0.709 0.709 0.6793 0.7478 0.6696 C 0.7746
                    0.6628 0.8159 0.6563 0.875 0.6563 C 0.9156 0.6563 0.9478 0.6594 0.9727 0.6635
                    C 0.9904 0.6123 1 0.5573 1 0.5 C 1 0.2239 0.7761 0 0.5 0 C 0.2239 0 0 0.2239
                    0 0.5 C 0 0.7761 0.2239 1 0.5 1 C 0.5573 1 0.6123 0.9904 0.6635 0.9727 Z"
                ></path>
              </clipPath>
            </svg>
            <img
              alt="avatar"
              src={img1}
              style={{ clipPath: 'url(#avatar_badge)' }}
            />
            <div style={{ fontSize: '0.85em' }}>
              <AvatarBadge position="bottom" className="tk-text-color--warning">
                <Icon iconName="busy" />
              </AvatarBadge>
            </div>
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar size="xlarge" variant="round">
            <img
              alt="avatar"
              src={img2}
              style={{ clipPath: 'url(#avatar_badge)' }}
            />
            <div style={{ fontSize: '0.8em' }}>
              <AvatarBadge position="bottom">
                <Icon iconName="offline" />
              </AvatarBadge>
            </div>
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar size="large" variant="round">
            <img
              alt="avatar"
              src={img3}
              style={{ clipPath: 'url(#avatar_badge)' }}
            />
            <div style={{ fontSize: '0.7em' }}>
              <AvatarBadge position="bottom" className="tk-text-color--ok">
                <Icon iconName="online" />
              </AvatarBadge>
            </div>
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar size="medium" variant="round">
            <img
              alt="avatar"
              src={img1}
              style={{ clipPath: 'url(#avatar_badge)' }}
            />
            <div style={{ fontSize: '0.75em' }}>
              <AvatarBadge
                position="bottom"
                className="tk-text-color--attention"
              >
                <Icon iconName="idle" />
              </AvatarBadge>
            </div>
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar size="small" variant="round">
            <img
              alt="avatar"
              src={img1}
              style={{ clipPath: 'url(#avatar_badge)' }}
            />
            <div style={{ fontSize: '0.6em' }}>
              <AvatarBadge position="bottom" className="tk-text-color--warning">
                <Icon iconName="busy" />
              </AvatarBadge>
            </div>
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar size="xsmall" variant="round">
            <img
              alt="avatar"
              src={img2}
              style={{ clipPath: 'url(#avatar_badge)' }}
            />
            <div style={{ fontSize: '0.7em' }}>
              <AvatarBadge position="bottom">
                <Icon iconName="offline" />
              </AvatarBadge>
            </div>
          </Avatar>
        </div>
      </div>
      <p>
        The size of the icon adaptes to the size of its parent. To adapt the
        size on your need, wrap it into a parent that redefine this `font-size`.
      </p>
    </div>
  );
};

export default {
  title: 'Components/Avatar',
  component: Avatar,
  subcomponents: { Icon },
};
