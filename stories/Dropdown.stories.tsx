import * as React from 'react';
import { Dropdown, DropdownOption, Icon, LabelValue, OptionRendererProps, SearchHeaderOption, TagRendererProps } from '../src/components';

const defaultOptions: LabelValue[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum gravida neque, suscipit ornare ex pulvinar id. Etiam vitae erat at dolor pharetra suscipit. Donec at nunc malesuada', value: '3' },
];

interface Person {
  label:string;
  value:string;
  name: string;
}

const personSelectorOptions: DropdownOption<Person>[] = [
  {
    label: 'FREQUENT CONTACTS',
    options: [
      { label: 'Emma Jones', value: '1', name: 'a' },
      { label: 'Mehmet Guest', value: '2', name: 'a' },
      { label: 'Charleigh Whitworth', value: '3', name: 'a' },
      { label: 'Hugo Svein', value: '4' , name: 'a'},
      { label: 'Alena Fedrick', value: '5', name: 'a' },
      { label: 'Philip Earl', value: '6' , name: 'a'},
      { label: 'Junita Torrey2', value: '7', name: 'a' },
      { label: 'Alena Fedrick2', value: '8', name: 'a' },
      { label: 'Philip Earl2', value: '9' , name: 'a'},
      { label: 'Junita Torrey Long description Very long description. ', value: '10', name: 'a' }, 
      { label: 'Emma Jones', value: '11', name: 'a' },
      { label: 'Mehmet Guest2', value: '12', name: 'a' },
      { label: 'Charleigh Whitworth2', value: '13', name: 'a' },
      { label: 'Hugo Svein2', value: '14' , name: 'a'},
    ]
  }
];

// Function provided by the user to filter the options
const filterDefaultOptions = async (inputValue: string) => {
  return defaultOptions.filter(i =>
    i?.label?.toLowerCase().includes(inputValue?.toLowerCase())
  );
};

const promiseOptions = (inputValue: string): Promise<DropdownOption<LabelValue>[]>  =>
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
  displayName:string;
  value:string;
}

const iconData: DropdownOption<Icon>[] = [
  { value: '1', displayName: 'app' },
  { value: '2', displayName: 'bot' },
  { value: '9', displayName: 'hide' },
  { value: '10', displayName: 'link' },
  { value: '3', displayName: 'adjust' },
  { value: '4', displayName: 'archive' },
  { value: '5', displayName: 'cashtag' },
  { value: '6', displayName: 'emoticon' },
  { value: '7', displayName: 'following' },
  { value: '8', displayName: 'flags' }
];

const IconPickerTagRenderer = (props: TagRendererProps<Icon>) => {
  const {data, remove} = props;
  return (
    <div>
      {data.displayName}
      <Icon className="tk-pl-1" iconName={data.displayName} />
      <Icon className="tk-ml-1" iconName="cross" onClick={remove} />
    </div>
  );
};

const IconPickerRenderer = (props: OptionRendererProps<Icon>) => {
  const {data} = props;
  return (
    <div>
      {data.displayName}
      <Icon className="tk-pl-1" iconName={data.displayName} />
    </div>
  );
};

const filterFunction = (icon: Icon, input: string) => {
  return !input || icon.displayName.indexOf(input)>-1 ;
};

const Template = (args) => {
  return (
    <div style={{ minHeight: '160px' }}>
      <Dropdown {...args} />
    </div>
  );
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
export const Default = Template.bind({});
Default.args = {
  options: defaultOptions, 
  enableTermSearch: true, 
  onTermSearch: onTermSearch,
  onChange: onChange
};

export const Select: React.FC = () => (
  <div>
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
    <Dropdown options={defaultOptions} label="Field label" showRequired/>
    <p className="tk-mt-4">
			With <strong>tooltip</strong>:
    </p>
    <Dropdown options={defaultOptions} tooltip="Hint to help the user" tooltipCloseLabel="Got it" />
    <p className="tk-mt-4">
			Clear selection with <strong>isInputClearable</strong>:
    </p>
    <Dropdown options={defaultOptions} isInputClearable onClear={onClear}/>

    <p className="tk-mt-4">
			With <strong>noOptionMessage</strong> customize the message that the dropdown will display when does not found any item on the list:
    </p>
    <Dropdown options={defaultOptions} noOptionMessage="No options custom message"/>
    <p className="tk-mt-4">
			With <strong>isDisabled</strong>:
    </p>
    <Dropdown options={defaultOptions} placeHolder="No option available" isDisabled label="Field label" />
    <p className="tk-mt-4">
			With <strong>iconName</strong> displays the specified icon on the left side of the dropdown:
    </p>
    <Dropdown options={defaultOptions} iconName="app"/>
    <h3 className="tk-mt-4">Grouped option list</h3>
    <p>With <b>aligned</b> mode (default)</p>
    <Dropdown options={timeZoneOptions} mode="aligned"/>
    <p>With <b>nested</b> mode</p>
    <Dropdown options={timeZoneOptions} mode="nested"/>

    <h2 className="tk-mt-4">Enable term search</h2>
    <p>- With <strong>enableTermSearch</strong> prop activated you can add a fixed option on the header of the Dropdown Menu that will be displayed when the user starts typing.</p>
    <p>- With <strong>onTermSearch</strong> prop you can handle the action to be done if the user selects the search by term option</p>
    <Dropdown options={defaultOptions} enableTermSearch onTermSearch={onTermSearch}/>
    <p>In addition, you can customize the message with <strong>termSearchMessage</strong> prop:</p>
    <Dropdown options={defaultOptions} enableTermSearch termSearchMessage="This is my customized term search message. Term: "/>
    
    <h2 className="tk-mt-5h">MultiSelect</h2>
    <p>The Dropdown component can handle multiple selections. It is enabled with the <strong>isMultiSelect</strong> prop:</p>
    <Dropdown options={personSelectorOptions} isMultiSelect placeHolder="Search for People" isInputClearable/>
    <p>With the <strong>maxHeight</strong> prop you can control the height of the multiple selection before scrolling on the input.</p>
    <Dropdown options={personSelectorOptions} isMultiSelect maxHeight={70} placeHolder="Search for People" isInputClearable noOptionMessage={'No options'}/>
   
    <h2 className="tk-mt-5h">Loading options</h2>
    <p>Use the <strong>asyncOptions</strong> prop to load options from a remote source as the user starts typing on the input.</p>
    <p>The <strong>asyncOptions</strong> prop:</p>
    <h3>defaultOptions</h3>
    <p>The <strong>defaultOptions</strong> prop is enabled by default (The options are iniatially loaded).</p>
    <Dropdown asyncOptions={promiseOptions} placeHolder="Async select" isInputClearable noOptionMessage={'No options'}/> 
    <p>* To disable: <strong>defaultOptions=false</strong>. (Start typing to load the options)</p>
    <Dropdown defaultOptions={false} asyncOptions={promiseOptions}  maxHeight={70} placeHolder="Async select" isInputClearable noOptionMessage={'No options'}/>
    <h3>Multiple Select</h3>
    <Dropdown asyncOptions={promiseOptions} isMultiSelect placeHolder="Async select" isInputClearable noOptionMessage={'No options'} />
    <h3>Loading with term search enabled</h3>
    <Dropdown asyncOptions={promiseOptions} placeHolder="Async select" enableTermSearch termSearchMessage="Term: "/>
  
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
      filterFunction={filterFunction}
      tagRenderer={IconPickerRenderer}
      onTermSearch={onTermSearch}
    />

    <p className="tk-mt-4">With <strong> tagRenderer </strong>prop you can customize the rendering of the selected item/s: </p>
    <Dropdown
      options={iconData}
      tagRenderer={IconPickerTagRenderer}
      optionRenderer={IconPickerRenderer}
      isMultiSelect
      placeHolder="Select an icon.."
      filterFunction={filterFunction}
    />

    <h2 className="tk-mt-5h">Custom Filter logic</h2>
    <p>If you would like to rewrite the filtration logic from the ground up, simply declare a new <strong> filterFunction </strong> to be passed in as a prop:</p>
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
);

export default {
  title: 'Components/Input/Dropdown',
  component: Dropdown
};
