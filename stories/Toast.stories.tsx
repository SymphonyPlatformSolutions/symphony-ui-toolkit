import * as React from 'react';
import { useState } from 'react';
import { Toast } from '../src/components';

export default {
  title: 'Components/Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <div style={{ margin: '150px auto', textAlign: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: { control: { disable: true } },
    placement: {
      control: { type: 'select' },
      options: [
        JSON.stringify({ horizontal: 'left', vertical: 'top'}),
        JSON.stringify({ horizontal: 'center', vertical: 'top'}),
        JSON.stringify({ horizontal: 'right', vertical: 'top'}),
        JSON.stringify({ horizontal: 'left', vertical: 'center'}),
        JSON.stringify({ horizontal: 'center', vertical: 'center'}),
        JSON.stringify({ horizontal: 'right', vertical: 'center'}),
        JSON.stringify({ horizontal: 'left', vertical: 'bottom'}),
        JSON.stringify({ horizontal: 'center', vertical: 'bottom'}),
        JSON.stringify({ horizontal: 'right', vertical: 'bottom'})
      ],
    },
  },
};

const Template = (args) => {
  const { placement, ...restArgs } = args;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showToast, _setShowToast] = useState(true);

  return <Toast
    placement={ JSON.parse(placement) }
    show={ showToast }
    {...restArgs}
  />;
};

export const Standard = Template.bind({});

Standard.args = {
  message: 'Some text',
  placement: JSON.stringify({ horizontal: 'center', vertical: 'center' }),
  show: true,
};

// export const WithACloseAction = Template.bind({});
// WithACloseAction.args = {
//   description: 'Some text',
//   closeLabel: 'Close',
//   children: <input type="text" name="fname" />,
// };

// export const ShowHide = Template.bind({});
// ShowHide.args = {
//   description: 'Toggle the visibility of the Tooltip in the Controls tab',
//   show: true,
//   children: <input type="text" name="fname" />,
// };

// export const OnClick = (args) => {
//   return (
//     <Toast {...args}>
//       <Icon iconName="info-round"/>
//     </Toast>
//   );
// };

// OnClick.args = {
//   description: 'Click on the icon',
//   displayTrigger: 'click',
//   closeLabel: 'Close',
//   children: <button type={'button'}>A button</button>,
// };

// OnClick.decorators = [addExplanation('Click the icon to see the tooltip')];

// export const OnHover = (args) => {
//   return (
//     <Toast {...args}>
//       <span>
//         <Icon iconName="info-round" />
//       </span>
//     </Toast>
//   );
// };

// OnHover.args = {
//   children: <button type={'button'}>A button</button>,
//   description: 'Message appears on hover',
//   displayTrigger: 'hover',
//   placement: 'top',
// };
// OnHover.decorators = [addExplanation('Hover the icon to see the tooltip')];

// export const Placements = Template.bind({});
// Placements.args = {
//   description: 'Select a placement in the Controls tab',
//   placement: 'top',
//   children: <input type="text" name="fname" />,
// };