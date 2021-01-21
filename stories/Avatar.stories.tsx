import * as React from 'react';
import { Avatar, Icon, BasicIndicator, AvatarBadge } from '../src/components';
import './styles/avatar.stories.css';

const img1 = require('./static/avatar.png');
const img2 = require('./static/avatar1.png');
const img3 = require('./static/avatar2.png');

const SquaredAvatar: React.FC = () => {
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

const RoundedAvatar: React.FC = () => {
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

const BoarderedAvatar: React.FC = () => {
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
            <span style={{ fontSize: '40px' }}>AB</span>
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="square" size="xlarge" bordered>
            <div style={{ fontSize: '36px' }}>
              <Icon iconName="call" />
            </div>
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="xlarge" bordered>
            <img src={img3} alt="avatar" />
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="xlarge" bordered>
            <span style={{ fontSize: '40px' }}>AB</span>
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar variant="round" size="xlarge" bordered>
            <div style={{ fontSize: '36px' }}>
              <Icon iconName="call" />
            </div>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

const Sizes: React.FC = () => {
  return (
    <div>
      <h2>Sizes</h2>
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

const AvatarWithTopBadge: React.FC = () => {
  return (
    <div>
      <h2>Badge on the top</h2>
      <div className="flex-row">
        <div className="flex-col">
          <Avatar variant="round" size="xlarge" bordered>
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

const AvatarWithBottomBadge: React.FC = () => {
  return (
    <div>
      <h2>Badge on the bottom</h2>
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

const AvatarWithAdvancedBadge = () => {
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
          <Avatar size="xlarge" variant="round">
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
            <AvatarBadge
              position="bottom"
              className="tk-text-color--warning avatarBadge"
            >
              <Icon iconName="busy" />
            </AvatarBadge>
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar size="xlarge" variant="round">
            <img
              alt="avatar"
              src={img2}
              style={{ clipPath: 'url(#avatar_badge)' }}
            />
            <AvatarBadge
              position="bottom"
              className="tk-text-color--offline avatarBadge"
            >
              <Icon iconName="offline" />
            </AvatarBadge>
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar size="xlarge" variant="round">
            <img
              alt="avatar"
              src={img3}
              style={{ clipPath: 'url(#avatar_badge)' }}
            />
            <AvatarBadge
              position="bottom"
              className="tk-text-color--ok avatarBadge"
            >
              <Icon iconName="online" />
            </AvatarBadge>
          </Avatar>
        </div>
        <div className="flex-col">
          <Avatar size="xlarge" variant="round">
            <img
              alt="avatar"
              src={img1}
              style={{ clipPath: 'url(#avatar_badge)' }}
            />
            <AvatarBadge
              position="bottom"
              className="tk-text-color--attention avatarBadge"
            >
              <Icon iconName="idle" />
            </AvatarBadge>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export const Avatars: React.FC = () => {
  return (
    <div>
      <SquaredAvatar />
      <RoundedAvatar />
      <BoarderedAvatar />
      <Sizes />
    </div>
  );
};

export const AvatarWithBadges: React.FC = () => {
  return (
    <div>
      <AvatarWithTopBadge />
      <AvatarWithBottomBadge />
      <AvatarWithAdvancedBadge />
    </div>
  );
};

export default {
  title: 'Components/Avatar',
  component: Avatars,
};
