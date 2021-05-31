import { button, withKnobs } from '@storybook/addon-knobs';
import React, { useState, useRef } from 'react';
import { Input, Icon, Validation } from '../src/components';

import { Validators } from '../src/core/validators/validators';


export default {
  title: 'Components/Input',
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ margin: '150px auto', textAlign: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
  },
  children: { control: { disable: true } },
};

const Template = (args) => {
  return <Input label="A label" tooltip="A tooltip" {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
  description: 'Input Type "button"',
  children: <Input type="button" />,
};

// export const WithACloseAction = Template.bind({});
// WithACloseAction.args = {
//   description: 'Some text',
//   placement: 'top',
//   closeLabel: 'Close',
//   children: <input type="text" name="fname" />,
// };
// export const Default = Template.bind({});


// export const Inputs: React.FC = () => {
//   return (
//     <div style={{ width: '50%' }}>
//       <div>
//         <p>
//           Input Type "button"
//         </p>
//         <Input type="button" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "checkbox"
//         </p>
//         <Input type="checkbox" placeholder="Firstname"></Input>
//       </div>
//       <div>
//         <p>
//           Input Type "color"
//         </p>
//         <Input type="color" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "date"
//         </p>
//         <Input type="date" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "datetime-local"
//         </p>
//         <Input type="datetime-local" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "email"
//         </p>
//         <Input type="email" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "file"
//         </p>
//         <Input type="file" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "image"
//         </p>
//         <Input type="image" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "month"
//         </p>
//         <Input type="month" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "number"
//         </p>
//         <Input type="number" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "password"
//         </p>
//         <Input type="password" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "radio"
//         </p>
//         <Input type="radio" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "range"
//         </p>
//         <Input type="range" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "reset"
//         </p>
//         <Input type="reset" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "search"
//         </p>
//         <Input type="search" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "submit"
//         </p>
//         <Input type="submit" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "tel"
//         </p>
//         <Input type="tel" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "text"
//         </p>
//         <Input type="text" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "time"
//         </p>
//         <Input type="time" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "url"
//         </p>
//         <Input type="url" placeholder="Firstname"></Input>
//       </div>
//       <hr />
//       <div>
//         <p>
//           Input Type "week"
//         </p>
//         <Input type="week" placeholder="Firstname"></Input>
//       </div>
//     </div>
//   );
// };

// export default {
//   title: 'Components/Input/Input',
//   component: Input,
//   subcomponents: { Icon },
//   decorators: [withKnobs],
// };
