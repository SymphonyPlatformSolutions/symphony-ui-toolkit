import * as React from 'react';
import { Dropdown, Icon, Typography } from '../src/components';
import * as PropTypes from 'prop-types';

const avatar1 = 'https://www.w3schools.com/w3images/avatar5.png';
const avatar2 = 'https://www.w3schools.com/w3images/avatar4.png';
const avatar3 = 'https://www.w3schools.com/w3images/avatar3.png';
const avatar4 = 'https://www.w3schools.com/w3images/avatar2.png';

const optionsMulti = [
  {
    label: 'FREQUENT CONTACTS',
    options: [
      { value: '1', label: 'Emma Jones', initial: 'C', position: 'UX director', imgUrl: avatar1 },
      { value: '2', label: 'Mehmet Guest', initial: 'S', position: 'UX director', imgUrl: avatar4 },
      {
        value: '3',
        label: 'Charleigh Whitworth',
        initial: 'V',
        position: 'Frontend Javascript Engineer',
        imgUrl: avatar2
      },
      { value: '4', label: 'Hugo Svein', initial: 'B', position: 'Backend Software Enginer', imgUrl: avatar3 },
      { value: '5', label: 'Alena Fedrick', initial: 'P', position: 'Backend Software Enginer', imgUrl: avatar4 },
      {
        value: '6',
        label: 'Philip Earl',
        initial: 'M',
        position: 'Frontend Javascript Engineer',
        imgUrl: avatar1
      },
      { value: '7', label: 'Deon Lennox', initial: 'A', position: 'Tech lead', imgUrl: avatar2 },
      {
        value: '8',
        label: 'Junita Torrey',
        initial: 'P',
        position: 'Frontend Javascript Engineer',
        imgUrl: avatar3
      },
      {
        value: '9',
        label: 'Adrian Buhr',
        initial: 'P',
        position: 'Frontend Javascript Engineer',
        imgUrl: avatar4
      },
      {
        value: '10',
        label: 'Iluminada Walford',
        initial: 'L',
        position: 'Backend Software Enginer',
        imgUrl: avatar1
      },
      { value: '11', label: 'Gisele Sher', initial: 'K', position: 'UX designer', imgUrl: avatar2 },
      { value: '12', label: 'Libby Epp', initial: 'C', position: '', imgUrl: avatar3 },
      { value: '13', label: 'Milan Palermo', initial: 'C', position: '', imgUrl: avatar4 }
    ]
  }
];

const customRenderOptions = [
  { value: '1', label: 'app' },
  { value: '2', label: 'bot' },
  { value: '9', label: 'hide' },
  { value: '10', label: 'link' },
  { value: '3', label: 'adjust' },
  { value: '4', label: 'archive' },
  { value: '5', label: 'cashtag' },
  { value: '6', label: 'emoticon' },
  { value: '7', label: 'following' },
  { value: '8', label: 'flags' }
];

const defaultOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
  { value: '4', label: 'Option 4' },
  { value: '5', label: 'Option 5' },
  { value: '6', label: 'Option 6' },
  { value: '7', label: 'Option 7' },
  { value: '8', label: 'Option 8' },
  { value: '9', label: 'Option 9' },
  { value: '10', label: 'Option 10' }
];

const IconPicker = (props) => {
  return (
    <div>
      {props.data.label}
      <Icon className="tk-pl-1" iconName={props.data.label} />
    </div>
  );
};

IconPicker.propTypes = {
  data: PropTypes.object
}

const tagRemove: React.ReactNode = () => {
  return (
    <div className="">
      <Icon iconName="cross" />
    </div>
  );
};

export const Select: React.FC = () => (
  <div>
    <h2>Dropdown</h2>
    <h3>Default</h3>
    <Dropdown options={defaultOptions} />
    <p className="tk-mt-4">
			With <Typography variant="bold">placeholder</Typography>
    </p>
    <Dropdown options={defaultOptions} placeHolder="Select an option.." />
    <p className="tk-mt-4">
			With <Typography variant="bold">label</Typography>
    </p>
    <Dropdown options={defaultOptions} label="Field label" />
    <p className="tk-mt-4">
			Clear selection with <Typography variant="bold">isClearable</Typography>
    </p>
    <Dropdown options={defaultOptions} isInputClearable />
    <h3 className="tk-mt-4">Disabled dropdown</h3>
    <Dropdown options={defaultOptions} placeHolder="No option available" isDisabled />
    <p className="tk-mt-4">
			With <Typography variant="bold">label</Typography>
    </p>
    <Dropdown options={defaultOptions} placeHolder="No option available" isDisabled label="Field label" />
    <h3 className="tk-mt-4">Expanded menu after selection</h3>
    <Dropdown options={defaultOptions} closeMenuOnSelect={false} />
    <h3 className="tk-mt-4">Custom render</h3>
    <Dropdown
      options={customRenderOptions}
      optionRenderer={IconPicker}
      tagRenderer={IconPicker}
      placeHolder="Select an icon.."
      label="Icon"
      hideSelectedOptions={false}
    />
  </div>
);

export const Multiselect: React.FC = () => (
  <div>
    <h2>Multiselect</h2>
    <h3>Default</h3>
    <Dropdown options={optionsMulti} isMultiSelect placeHolder="Search for People"/>
    <p className="tk-mt-4">
			With <Typography variant="bold">label</Typography>
    </p>
    <Dropdown options={defaultOptions} placeHolder="Search for People" label="Field label" isMultiSelect/>
    <p className="tk-mt-4">
			Clear selection with <Typography variant="bold">isClearable</Typography>
    </p>
    <Dropdown options={defaultOptions} isInputClearable isMultiSelect/>
    <h3 className="tk-mt-4">Disabled dropdown</h3>
    <Dropdown options={defaultOptions} placeHolder="No option available" isDisabled isMultiSelect/>
    <Dropdown options={defaultOptions} placeHolder="No option available" isDisabled label="Field label" isMultiSelect/>

    <h3 className="tk-mt-4">Custom render</h3>
    <p>Custom option and tag render</p>
    <Dropdown
      options={customRenderOptions}
      optionRenderer={IconPicker}
      tagRenderer={IconPicker}
      // tagRemoveRenderer={tagRemove}
      placeHolder="Select an icon.."
      label="Icon"
      isMultiSelect
    />
    <p>Custom option and tag render with clear all </p>
    <Dropdown
      options={customRenderOptions}
      optionRenderer={IconPicker}
      tagRenderer={IconPicker}
      tagRemoveRenderer={tagRemove}
      placeHolder="Select an icon.."
      label="Icon"
      isMultiSelect
      isInputClearable
    />
  </div>
);
export const Default: React.FC = () => (
  <div>
    <h2 className="tk-mb-3">Default dropdown</h2>
    <div style={{ width: '200px' }}>
      {/* <Validation
        errors={['This user name already exists', 'This field is required']}
      > */}
      <Dropdown
        options={defaultOptions}
        placeHolder="Select an option"
        closeMenuOnSelect
        isInputClearable
        label="hola this is a label"
      />
      {/* </Validation> */}
    </div>
  </div>
);

export default {
  title: 'Components/Dropdown',
  component: Dropdown
};
