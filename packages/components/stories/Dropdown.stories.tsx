/* eslint-disable react/display-name */
import '../src/styles';
import './stories.css';

import { TkIcon } from '@symphony-ui/uitoolkit-styles/dist/fonts/tk-icons';
import * as React from 'react';
import {
  Dropdown,
  DropdownOption,
  Icon,
  LabelValue,
  OptionRendererProps,
  SearchHeaderOption,
  TagRendererProps,
} from '../src/components';
import { PortalTemplate } from './templates';
import type { Meta, StoryObj } from '@storybook/react';

const defaultOptions: LabelValue[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
  {
    label:
      'Option Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum gravida neque, suscipit ornare ex pulvinar id. Etiam vitae erat at dolor pharetra suscipit. Donec at nunc malesuada',
    value: 'long',
  },
];

interface Person {
  label: string;
  value: string;
  name: string;
}

const personSelectorOptions: DropdownOption<Person>[] = [
  {
    label: 'FREQUENT CONTACTS',
    options: [
      { label: 'Emma Jones', value: '1', name: 'a' },
      { label: 'Mehmet Guest', value: '2', name: 'a' },
      { label: 'Charleigh Whitworth', value: '3', name: 'a' },
      { label: 'Hugo Svein', value: '4', name: 'a' },
      { label: 'Alena Fedrick', value: '5', name: 'a' },
      { label: 'Philip Earl', value: '6', name: 'a' },
      { label: 'Junita Torrey2', value: '7', name: 'a' },
      { label: 'Alena Fedrick2', value: '8', name: 'a' },
      { label: 'Philip Earl2', value: '9', name: 'a' },
      { label: 'Junita Torrey Long description Very long description. ', value: '10', name: 'a' },
      { label: 'Emma Jones', value: '11', name: 'a' },
      { label: 'Mehmet Guest2', value: '12', name: 'a' },
      { label: 'Charleigh Whitworth2', value: '13', name: 'a' },
      { label: 'Hugo Svein2', value: '14', name: 'a' },
    ]
  }
];

// Function provided by the user to filter the options
const filterDefaultOptions = async (inputValue: string) => {
  return defaultOptions.filter((i) =>
    i?.label?.toLowerCase().includes(inputValue?.toLowerCase())
  );
};

const promiseOptions = (inputValue: string): Promise<DropdownOption<LabelValue>[]> =>
  new Promise(resolve => {
    setTimeout(() =>
      resolve(filterDefaultOptions(inputValue)), 1000);
  });

const timeZoneOptions: DropdownOption<LabelValue>[] = [
  { label: '(GMT +03:00) Tanzania', value: '8' },
  { label: '(GMT +03:00) Uganda', value: '9' },
  {
    label: 'United states of America (USA)',
    options: [
      { label: '(GMT -04:00) United states of America (USA) - New York', value: '1' },
      { label: '(GMT -04:00) United states of America (USA) - Detroit', value: '2' },
      { label: '(GMT -04:00) United states of America (USA) - Menominee', value: '3' },
      { label: '(GMT -05:00) United states of America (USA) - Center', value: '4' },
    ]
  }
];

/** Icon custom renderers */
interface Icon {
  displayName: TkIcon;
  value: string;
}

const iconData: DropdownOption<Icon>[] = [
  { value: '1', displayName: 'app', label: 'app' },
  { value: '2', displayName: 'bot', label: 'bot' },
  { value: '9', displayName: 'hide', label: 'hide' },
  { value: '10', displayName: 'link', label: 'link' },
  { value: '3', displayName: 'adjust', label: 'adjust' },
  { value: '4', displayName: 'archive', label: 'archive' },
  { value: '5', displayName: 'cashtag', label: 'cashtag' },
  { value: '6', displayName: 'emoticon', label: 'emoticon' },
  { value: '7', displayName: 'following', label: 'following' },
  { value: '8', displayName: 'flags', label: 'flags' }
];

const IconPickerTagRenderer = (props: TagRendererProps<Icon>) => {
  const { data, remove } = props;
  return (
    <div style={{ backgroundColor: 'rgba(0, 200, 0, 0.5)', borderRadius: '4px', padding: '0 4px' }}>
      {data.displayName}
      <Icon className="tk-pl-1" iconName={data.displayName} />
      <Icon className="tk-ml-1" iconName="cross" onClick={remove} />
    </div>
  );
};

const IconPickerRenderer = (props: OptionRendererProps<Icon>) => {
  const { data } = props;
  return (
    <>
      <Icon className="tk-pr-1" iconName={data.displayName} />
      {data.displayName}
    </>
  );
};

const filterFunction = (icon: Icon, input: string) => {
  return !input || icon.displayName.indexOf(input) > -1 || icon.value.indexOf(input) > -1;
};

const onTermSearch = (option: SearchHeaderOption) => {
  console.log('On term search selected: ', option.value);
}
const onChange = (value) => {
  console.log('Changed: ', value)
}
const onClear = () => {
  console.log('Dropddown cleared')
}

const meta: Meta<typeof Dropdown> = {
  args: {
    options: defaultOptions,
    enableTermSearch: true,
    onTermSearch: onTermSearch,
    onChange: onChange
  },
  component: Dropdown,
  decorators: [
    (Story) => (<div style={{ minHeight: '160px' }}>
      <Story />
    </div>)
  ],
  title: 'Components/Input/Dropdown',
} satisfies Meta<typeof Dropdown>;
  
export default meta;
type Story = StoryObj<typeof Dropdown>

export const Default: Story = {};

export const Variants: Story = {
  render: () => <>
    <h4>Default color</h4>
    <Dropdown options={defaultOptions} />
    <h4>Destructive</h4>
    <Dropdown options={defaultOptions} variant="destructive" />
    <div className="tk-py-5" /><div className="tk-py-5" />
  </>
};

export const Required: Story = {
  render: () => <>
    <Dropdown options={defaultOptions} label="Field label"  required={true} showRequired={true} />
  </>
};

export const Sizes: Story = {
  render: () => <>
    <h4>Small</h4>
    <div style={{ display: 'flex' }}>
      <div style={{ width: '384px', marginRight: '32px' }}>
        <Dropdown options={defaultOptions} size="small" label="Field label" isInputClearable />
      </div>
      <div style={{ width: '384px' }}>
        <Dropdown options={defaultOptions} isMultiSelect size="small" label="Field label" isInputClearable />
      </div>
    </div>
    <h4>Medium</h4>
    <div style={{ display: 'flex' }}>
      <div style={{ width: '384px', marginRight: '32px' }}>
        <Dropdown options={defaultOptions} size="medium" label="Field label" isInputClearable />
      </div>
      <div style={{ width: '384px' }}>
        <Dropdown options={defaultOptions} isMultiSelect size="medium" label="Field label" isInputClearable />
      </div>
    </div>
    <h4>Large</h4>
    <div style={{ display: 'flex' }}>
      <div style={{ width: '384px', marginRight: '32px' }}>
        <Dropdown options={defaultOptions} size="large" label="Field label" isInputClearable />
      </div>
      <div style={{ width: '384px' }}>
        <Dropdown options={defaultOptions} isMultiSelect size="large" label="Field label" isInputClearable />
      </div>
    </div>
    <div className="tk-py-5" /><div className="tk-py-5" />
  </>
};

export const Select: Story = {
  render: () => <div>
    <p>Let`s have a look on the different props than can be used to render the dropdown: </p>
    <p className="tk-mt-4">
      With <strong>placeholder</strong>:
    </p>
    <Dropdown options={defaultOptions} placeHolder="Customized placeholder: Please select an option.." />
    <p className="tk-mt-4">
      With <strong>label</strong>:
    </p>
    <Dropdown options={defaultOptions} label="Field label" />
    <p className="tk-mt-4">
      With <strong>label required</strong>:
    </p>
    <Dropdown options={defaultOptions} label="Field label" showRequired />
    <p className="tk-mt-4">
      With <strong>tooltip</strong>:
    </p>
    <Dropdown options={defaultOptions} tooltip="Hint to help the user" tooltipCloseLabel="Got it" />

    <p className="tk-mt-4">
      With <strong>helperText</strong>:
    </p>
    <Dropdown options={defaultOptions} helperText="Helper text" />

    <p className="tk-mt-4">
      Clear selection with <strong>isInputClearable</strong>:
    </p>
    <Dropdown options={defaultOptions} isInputClearable onClear={onClear} />

    <p className="tk-mt-4">
      With <strong>noOptionMessage</strong> customize the message that the dropdown will display when does not found any item on the list:
    </p>
    <Dropdown options={defaultOptions} noOptionMessage="No options custom message" />
    <p className="tk-mt-4">
      With <strong>isDisabled</strong>:
    </p>
    <Dropdown options={defaultOptions} defaultValue={defaultOptions[0]} placeHolder="No option available" isDisabled label="Field label" />
    <p className="tk-mt-4">
      With <strong>iconName</strong> displays the specified icon on the left side of the dropdown:
    </p>
    <Dropdown options={defaultOptions} iconName="search" />
    <h3 className="tk-mt-4">Grouped option list</h3>
    <p>With <b>aligned</b> mode (default)</p>
    <Dropdown options={timeZoneOptions} mode="aligned" />
    <p>With <b>nested</b> mode</p>
    <Dropdown options={timeZoneOptions} mode="nested" />

    <h2 className="tk-mt-4">Enable term search</h2>
    <p>- With <strong>enableTermSearch</strong> prop activated you can add a fixed option on the header of the Dropdown Menu that will be displayed when the user starts typing.</p>
    <p>- With <strong>onTermSearch</strong> prop you can handle the action to be done if the user selects the search by term option</p>
    <Dropdown options={defaultOptions} enableTermSearch onTermSearch={onTermSearch} />
    <p>In addition, you can customize the message with <strong>termSearchMessage</strong> prop:</p>
    <Dropdown options={defaultOptions} enableTermSearch termSearchMessage="This is my customized term search message. Term: " />

    <h2 className="tk-mt-5h">MultiSelect</h2>
    <p>The Dropdown component can handle multiple selections. It is enabled with the <strong>isMultiSelect</strong> prop:</p>
    <Dropdown options={personSelectorOptions} isMultiSelect placeHolder="Search for People" isInputClearable />
    <p>With the <strong>maxHeight</strong> prop you can control the height of the multiple selection before scrolling on the input.</p>
    <Dropdown options={personSelectorOptions} isMultiSelect maxHeight={70} placeHolder="Search for People" isInputClearable noOptionMessage={'No options'} />

    <h2 className="tk-mt-5h">Async loading options</h2>
    <p>Use the <strong>asyncOptions</strong> prop to load options from a remote source as the user starts typing on the input.</p>
    <p>The <strong>asyncOptions</strong> prop:</p>
    <h3>defaultOptions</h3>
    <p>The <strong>defaultOptions</strong> prop is enabled by default (The options are initially loaded).</p>
    <Dropdown asyncOptions={promiseOptions} placeHolder="Async select" isInputClearable noOptionMessage={'No options'} />
    <p>* To disable: <strong>defaultOptions=false</strong>. (Start typing to load the options)</p>
    <Dropdown defaultOptions={false} asyncOptions={promiseOptions} maxHeight={70} placeHolder="Async select" isInputClearable noOptionMessage={'No options'} />
    <h3>Multiple Select</h3>
    <Dropdown asyncOptions={promiseOptions} isMultiSelect placeHolder="Async select" isInputClearable noOptionMessage={'No options'} />
    <h3>Loading with term search enabled</h3>
    <Dropdown asyncOptions={promiseOptions} placeHolder="Async select" enableTermSearch termSearchMessage="Term: " />

    <h2 className="tk-mt-5h">Creatable options</h2>
    <p>Use the <strong>addNewOptions</strong> prop to let the user create option at runtime. An option will be created, based on the input value, and be added the option list.</p>
    <h3>Default</h3>
    <Dropdown
      addNewOptions
      options={defaultOptions}
      noOptionMessage="No options"
      placeHolder="Please type a word"
    />
    <h3>isValidNewOption (optional)</h3>
    <p>The <strong>isValidNewOption</strong> prop is optional. By default, any new option is valid.</p>
    <p>In this example, we only let the user create option containing the character <i>O</i>, and not already part of the existing options:</p>
    <Dropdown
      addNewOptions
      options={defaultOptions}
      noOptionMessage="No options, please type a word with the character 'O' to create a new option"
      placeHolder="Please type a word with the character 'O'"
      isValidNewOption={(inputValue, value, options) => {
        const includesA = inputValue?.includes('O');
        const isExisting = options?.map((option) => option.label).includes(inputValue);
        return includesA && !isExisting;
      }} />
    <h3>getNewOptionData (optional)</h3>
    <p>The <strong>getNewOptionData</strong> prop is optional. By default, the created option will have this structure: &#123; value: <i>inputValue</i>, label: <i>inputValue</i> &#125;.</p>
    <p>In this example, we use options having <strong>id/name</strong> instead of value/label, and we create option having the structure &#123; id: <i>inputValue</i>, name: <i>inputValue</i> &#125;:</p>
    <Dropdown
      addNewOptions
      options={[
        { id: 'id1', name: 'Name 1' },
        { id: 'id2', name: 'Name 2' },
        { id: 'id3', name: 'Name 3' },
      ]}
      bindLabel={(option) => option.name}
      placeHolder="Please type a word"
      noOptionMessage="No options"
      getNewOptionData={(inputValue) => ({ id: inputValue, name: inputValue })}
    />
    <h3>With multi-selection</h3>
    <Dropdown
      addNewOptions
      isMultiSelect
      options={defaultOptions}
      placeHolder="Please type a word to load options"
      noOptionMessage="No options"
    />
    <h3>With async options loading</h3>
    <Dropdown
      addNewOptions
      asyncOptions={promiseOptions}
      placeHolder="Please type a word to load options"
      noOptionMessage="No options"
    />

    <h2 className="tk-mt-5h">Customized selects</h2>
    <p>
      You can easily customize the appearance of the UIToolkit Dropdown and render your own components.
    </p>
    <p className="tk-mt-4">With <strong> optionRenderer </strong>prop you can customize the rendering of the option list: </p>
    <Dropdown
      options={iconData}
      optionRenderer={IconPickerRenderer}
      placeHolder="Select an icon.."
      enableTermSearch
      tagRenderer={IconPickerRenderer}
      onTermSearch={onTermSearch}
    />
    <br />
    <Dropdown
      options={iconData}
      optionRenderer={IconPickerRenderer}
      placeHolder="Select an icon.."
      enableTermSearch
      tagRenderer={IconPickerRenderer}
      onTermSearch={onTermSearch}
      variant="destructive"
    />

    <p className="tk-mt-4">With <strong> tagRenderer </strong>prop you can customize the rendering of the selected item/s: </p>
    <Dropdown
      options={iconData}
      tagRenderer={IconPickerTagRenderer}
      optionRenderer={IconPickerRenderer}
      isMultiSelect
      placeHolder="Select an icon.."
    />

    <h2 className="tk-mt-5h">Custom Filter</h2>
    <p>To add a custom filter, you can simply use pass a method to the <strong> filterFunction </strong> prop:</p>
    <Dropdown
      options={iconData}
      tagRenderer={IconPickerTagRenderer}
      optionRenderer={IconPickerRenderer}
      isMultiSelect
      placeHolder="Select an icon.."
      filterFunction={filterFunction}
    />

    <h2 className="tk-mt-5h">Scroll into view - disabled</h2>
    <p>{"When pressing the dropdown while it's not fully in view, it will not scroll into view"}</p>
    <Dropdown
      options={defaultOptions}
      menuShouldScrollIntoView={false}
    />
  </div>
};

export const Portal = PortalTemplate;
Portal.args = {
  title: 'A Dropdown rendering its menu inside a Portal',
  component: <Dropdown
    options={defaultOptions}
    menuPortalTarget={document.body}
    menuShouldBlockScroll={true}
    menuPortalStyles={{ zIndex: 100 }} />,
};