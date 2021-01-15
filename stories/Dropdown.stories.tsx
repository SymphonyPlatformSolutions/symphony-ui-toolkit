import * as React from 'react';
import { Dropdown, Icon, Typography } from '../src/components';
import { customRenderOptions, IconPicker } from '../src/components/dropdown/CustomRender';

const defaultOptions = [
	{ label: 'Option 1', value: '1' },
	{ label: 'Option 2', value: '2' },
	{ label: 'Option 3', value: '3' },
	{ label: 'Option 4', value: '4' },
	{ label: 'Option 5', value: '5' },
	{ label: 'Option 6', value: '6' },
	{ label: 'Option 7', value: '7' }
];

const multiSelectOptions = [
	{
		label: 'FREQUENT CONTACTS',
		options: [
			{ label: 'Emma Jones', value: '1' },
			{ label: 'Mehmet Guest', value: '2' },
			{ label: 'Charleigh Whitworth', value: '3' },
			{ label: 'Hugo Svein', value: '4' },
			{ label: 'Alena Fedrick', value: '5' },
			{ label: 'Philip Earl', value: '6' },
			{ label: 'Junita Torrey', value: '7' }
		]
	}
];

const tagRemove: React.ReactNode = () => {
	return (
		<div className="">
			<Icon iconName="cross" />
		</div>
	);
};

const Template = (args) => {
	return (
		<div style={{ minHeight: '240px' }}>
			<Dropdown {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	options: defaultOptions
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
		<h3 className="tk-mt-4">Custom render</h3>
		<p>
    You can replace the default components with your own, using the <Typography variant="bold">optionRenderer </Typography>and{' '}
			<Typography variant="bold">tagRenderer </Typography>props.
		</p>
		<Dropdown
			options={customRenderOptions}
			optionRenderer={IconPicker}
			tagRenderer={IconPicker}
			placeHolder="Select an icon.."
			label="Icon"
		/>
	</div>
);

export const Multiselect: React.FC = () => (
	<div>
		<h2>Multiselect</h2>
		<h3>Default</h3>
		<Dropdown options={multiSelectOptions} isMultiSelect placeHolder="Search for People" />
		<p className="tk-mt-4">
			With <Typography variant="bold">label</Typography>
		</p>
		<Dropdown options={defaultOptions} placeHolder="Search for People" label="Field label" isMultiSelect />
		<p className="tk-mt-4">
			Clear selection with <Typography variant="bold">isClearable</Typography>
		</p>
		<Dropdown options={defaultOptions} isInputClearable isMultiSelect />
		<p className="tk-mt-4">
			with <Typography variant="bold">displayArrowIndicator</Typography>
		</p>
		<Dropdown options={defaultOptions} isInputClearable isMultiSelect displayArrowIndicator />
		<h3 className="tk-mt-4">Disabled dropdown</h3>
		<Dropdown options={defaultOptions} placeHolder="No option available" isDisabled isMultiSelect />
		<Dropdown
			options={defaultOptions}
			placeHolder="No option available"
			isDisabled
			label="Field label"
			isMultiSelect
		/>

		<h3 className="tk-mt-4">Custom render</h3>
		<p>
			You can replace the default components with your own, using the
			<Typography variant="bold"> optionRenderer</Typography> and
			<Typography variant="bold"> tagRenderer</Typography> and <Typography variant="bold"> tagRemoveRenderer</Typography> props.
		</p>
		<Dropdown
			options={customRenderOptions}
			optionRenderer={IconPicker}
			tagRenderer={IconPicker}
			tagRemoveRenderer={tagRemove}
			placeHolder="Select an icon.."
			label="Icon"
			isMultiSelect
		/>
	</div>
);

export default {
	title: 'Components/Dropdown',
	component: Dropdown
};
