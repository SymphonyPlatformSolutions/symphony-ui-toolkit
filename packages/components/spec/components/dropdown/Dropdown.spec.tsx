import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { object } from 'prop-types';
import * as React from 'react';
import { Button, Validation } from '../../../src/components';
import { Keys } from '../../../src/components/common/eventUtils';
import Dropdown, {
  DropdownOption,
  LabelValue,
} from '../../../src/components/dropdown';
import { Validators } from '../../../src/core/validators/validators';
import { vi } from 'vitest';

const CustomComponent = ({ data }) => <div>{data?.label}</div>;
CustomComponent.propTypes = { data: object };

const filterFunction = (element: any, input: string) => {
  return !input || element.displayName.indexOf(input) > -1;
};

const onChange = vi.fn();
const onInit = vi.fn();
const onTermSearch = vi.fn();
const onClear = vi.fn();
const onBlur = vi.fn();
const optionDisabled = vi.fn();
const optionSelected = vi.fn();

const options = [
  { label: 'banana' },
  { label: 'avocado' },
  { label: 'orange' },
];

describe('Dropdown component test suite =>', () => {
  const dropdownProps: {
    id: string;
    options: any[];
  } = {
    options: [],
    id: 'testId',
  };

  afterEach(() => {
    onInit.mockClear();
  })

  describe('when options are Sync', () => {
    beforeEach(() => {
      dropdownProps.options = options;
    });

    describe('when is simple Dropdown', () => {
      it('should render the Dropdown component by default', async () => {
        const { getByText } = render(
          <Dropdown options={dropdownProps.options} />
        );
        expect(getByText('Select...')).toBeInTheDocument();
      });

      it('should render the Dropdown component by default', async () => {
        const timeZoneOptions: DropdownOption<LabelValue>[] = [
          { label: '(GMT +03:00) Tanzania', value: '8' },
          { label: '(GMT +03:00) Uganda', value: '9' },
          {
            label: 'United states of America (USA)',
            options: [
              {
                label: '(GMT -04:00) United states of America (USA) - New York',
                value: '1',
              },
              {
                label: '(GMT -04:00) United states of America (USA) - Detroit',
                value: '2',
              },
              {
                label:
                  '(GMT -04:00) United states of America (USA) - Menominee',
                value: '3',
              },
              {
                label: '(GMT -05:00) United states of America (USA) - Center',
                value: '4',
              },
            ],
          },
        ];
        render(<Dropdown options={timeZoneOptions} mode="nested" />);
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        const nestedItem = screen.getByText(
          '(GMT -04:00) United states of America (USA) - New York'
        );
        expect(
          nestedItem.classList.contains('tk-select__option--nested')
        ).toBeTruthy();
      });

      it('should show/hide options menu on click', async () => {
        const { getByText } = render(
          <Dropdown
            options={dropdownProps.options}
            hideSelectedOptions
            closeMenuOnSelect
            enableTermSearch
          />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        expect(getByText('banana')).toBeTruthy();
        expect(getByText('avocado')).toBeTruthy();
        expect(getByText('orange')).toBeTruthy();
      });

      it('should show/hide options menu by pressing Enter', async () => {
        const { getByText } = render(
          <Dropdown
            options={dropdownProps.options}
            hideSelectedOptions
            closeMenuOnSelect
            enableTermSearch
          />
        );
        const input = screen.getByRole('searchbox');
        fireEvent.keyDown(input, { key: Keys.ENTER });
        expect(getByText('banana')).toBeTruthy();
        expect(getByText('avocado')).toBeTruthy();
        expect(getByText('orange')).toBeTruthy();
      });

      it('should hide options menu by pressing ESC and stop propagate the event only if the dropdown was opened', async () => {
        const onKeyDownContainer = vi.fn();
        const { queryByText } = render(
          <div onKeyDown={onKeyDownContainer}>
            <Dropdown
              options={dropdownProps.options}
              hideSelectedOptions
              closeMenuOnSelect
              enableTermSearch
            />
          </div>
        );
        const input = screen.getByRole('searchbox');
        fireEvent.keyDown(input, { key: Keys.ENTER });
        expect(onKeyDownContainer).toHaveBeenCalledTimes(1);

        fireEvent.keyDown(input, { key: Keys.ESC });
        expect(onKeyDownContainer).toHaveBeenCalledTimes(1);
        expect(queryByText('banana')).not.toBeInTheDocument();
        expect(queryByText('avocado')).not.toBeInTheDocument();
        expect(queryByText('orange')).not.toBeInTheDocument();

        fireEvent.keyDown(input, { key: Keys.ESC });
        expect(onKeyDownContainer).toHaveBeenCalledTimes(2);
      });

      it('should handle disable mode', async () => {
        const { queryByText, container } = render(
          <Dropdown options={dropdownProps.options} isDisabled />
        );
        userEvent.click(
          container.querySelector('.tk-select__input input') ||
            fail('expected element to be found')
        );
        expect(queryByText('banana')).toBeFalsy();
        expect(queryByText('avocado')).toBeFalsy();
        expect(queryByText('orange')).toBeFalsy();

        expect(
          container.querySelector('.tk-input-group--disabled')
        ).toBeTruthy();
      });

      it('should select first option', async () => {
        const { getByText } = render(
          <Dropdown
            options={dropdownProps.options}
            noOptionMessage="no options message"
          />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        const option = screen.getByText('banana');
        userEvent.click(option);
        expect(getByText('banana')).toBeTruthy();
        userEvent.type(input, 'zz');
        expect(screen.getByText('no options message')).toBeTruthy();
      });

      it('should render custom render dropdown', async () => {
        const { container, getByText } = render(
          <Dropdown
            isMultiSelect
            options={dropdownProps.options}
            optionRenderer={CustomComponent}
            displayArrowIndicator
            tagRenderer={CustomComponent}
            isInputClearable
            onChange={onChange}
            onClear={onClear}
          />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        const option = screen.getByText('banana');
        userEvent.click(option);
        expect(getByText('banana')).toBeTruthy();
        const cross =
          container.querySelector('i') || fail('expected element to be found');
        userEvent.click(cross);
        expect(onClear).toBeCalled();
        expect(getByText('Select...')).toBeTruthy();
      });

      it('should support custom option structure', async () => {
        const customOptions = [
          { firstName: 'Eve', lastName: 'Hill' },
          { firstName: 'Justin', lastName: 'Case' },
          { firstName: 'Anna', lastName: 'Conda' },
        ];
        const bindLabel = (option) => option.lastName;

        const { getByText, queryByText } = render(
          <Dropdown
            isMultiSelect
            options={customOptions}
            onChange={onChange}
            onClear={onClear}
            bindLabel={bindLabel}
          />
        );

        const input = screen.getByRole('searchbox');
        userEvent.click(input);

        expect(getByText('Hill')).toBeInTheDocument();
        expect(getByText('Case')).toBeInTheDocument();
        expect(getByText('Conda')).toBeInTheDocument();

        userEvent.click(getByText('Case'));
        expect(getByText('Case')).toBeInTheDocument();
        expect(queryByText('Hill')).not.toBeInTheDocument();
        expect(queryByText('Conda')).not.toBeInTheDocument();
      });

      it('should allow prop propagation (otherProps)', async () => {
        const { getByTestId } = render(
          <Dropdown
            options={dropdownProps.options}
            data-testid="another-prop"
          />
        );
        expect(getByTestId('another-prop')).toBeInTheDocument();
      });

      it('should call onInit function at load if provided', async () => {
        render(
          <Dropdown
            options={dropdownProps.options}
            onInit={onInit}
            value="value"
          />
        );
        expect(onInit).toHaveBeenCalledWith('value');
      });
    });

    describe('when is Multiselect', () => {
      it('should render the Multiselect component by default', async () => {
        const { getByText } = render(
          <Dropdown options={dropdownProps.options} isMultiSelect />
        );
        expect(getByText('Select...')).toBeInTheDocument();
      });

      it('should show/hide options menu on click', async () => {
        const { getByText } = render(
          <Dropdown
            options={dropdownProps.options}
            isMultiSelect
            filterFunction={filterFunction}
          />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        expect(getByText('banana')).toBeTruthy();
        expect(getByText('avocado')).toBeTruthy();
        expect(getByText('orange')).toBeTruthy();
      });

      it('should show/hide options menu on enter key pressed', async () => {
        const { getByText } = render(
          <Dropdown
            options={dropdownProps.options}
            isMultiSelect
            filterFunction={filterFunction}
          />
        );
        const input = screen.getByRole('searchbox');
        fireEvent.keyDown(input, { key: Keys.ENTER });
        expect(getByText('banana')).toBeTruthy();
        expect(getByText('avocado')).toBeTruthy();
        expect(getByText('orange')).toBeTruthy();
      });

      it('should select first option', async () => {
        const { getByText } = render(
          <Dropdown options={dropdownProps.options} isMultiSelect />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        const option = screen.getByText('banana');
        userEvent.click(option);
        expect(getByText('banana')).toBeTruthy();
      });

      it('should clean selection', () => {
        const { getByText, container } = render(
          <Dropdown options={dropdownProps.options} isMultiSelect />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        const option = screen.getByText('banana');
        userEvent.click(option);
        const cross =
          container.querySelector('i') || fail('expected element to be found');
        userEvent.click(cross);
        expect(getByText('Select...')).toBeTruthy();
      });

      it('should render custom render dropdown', async () => {
        const { getByText } = render(
          <Dropdown
            isMultiSelect
            options={dropdownProps.options}
            optionRenderer={CustomComponent}
            displayArrowIndicator
            tagRenderer={CustomComponent}
          />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        const option = screen.getByText('banana');
        userEvent.click(option);
        expect(getByText('banana')).toBeTruthy();
      });
    });

    describe('when search by term is enabled', () => {
      it('should render the header option when user starts typing', async () => {
        const { queryByText } = render(
          <Dropdown
            options={dropdownProps.options}
            displayArrowIndicator
            enableTermSearch
            termSearchMessage="Search for term"
          />
        );
        const input = screen.getByRole('searchbox');
        userEvent.type(input, 'B');
        expect(queryByText(/Search for term/)).toBeInTheDocument();
      });

      describe('when focusing on the dropdown list', () => {
        it('should focus on the first option (skipping the headerOption) when there is a value on the input', async () => {
          const { getByText } = render(
            <Dropdown
              options={dropdownProps.options}
              displayArrowIndicator
              enableTermSearch
            />
          );
          const input = screen.getByRole('searchbox');
          userEvent.type(input, 'B');
          expect(getByText('banana').className).toContain(
            'tk-select__option--is-focused'
          );
        });

        it('should focus on the first option (skipping the headerOption) when the user presses the `home` key', async () => {
          const { getByText } = render(
            <Dropdown
              options={dropdownProps.options}
              displayArrowIndicator
              enableTermSearch
            />
          );
          const input = screen.getByRole('searchbox');
          userEvent.click(input);
          fireEvent.keyDown(input, { key: Keys.ARROW_DOWN });
          expect(getByText('avocado').className).toContain(
            'tk-select__option--is-focused'
          );
          fireEvent.keyDown(input, { key: Keys.HOME });
          expect(getByText('banana').className).toContain(
            'tk-select__option--is-focused'
          );
        });
      });

      it('should select option header', async () => {
        const searchedTerm = 'BBBmous';
        const { getByText, queryByText } = render(
          <Dropdown
            isOptionDisabled={optionDisabled}
            isOptionSelected={optionSelected}
            bindValue={'bindValue'}
            options={dropdownProps.options}
            displayArrowIndicator
            enableTermSearch
            onTermSearch={onTermSearch}
            onBlur={onBlur}
          />
        );
        const input = screen.getByRole('searchbox');
        fireEvent.blur(input);
        expect(onBlur).toBeCalled();
        userEvent.type(input, searchedTerm);
        fireEvent.mouseDown(input);
        //Select header option
        fireEvent.click(
          queryByText(/Search for term/) || fail('expected element to be found')
        );
        expect(getByText(searchedTerm)).toBeInTheDocument();
      });
    });

    describe('when is with Validation Component', () => {
      it('should be triggered on Blur and on Change', async () => {
        const { getByText } = render(
          <>
            <Button>Outside target</Button>
            <Validation
              validator={[Validators.Required]}
              errorMessage={{ required: 'This field is required' }}
            >
              <Dropdown
                isMultiSelect
                options={dropdownProps.options}
                optionRenderer={CustomComponent}
                displayArrowIndicator
                tagRenderer={CustomComponent}
              />
            </Validation>
          </>
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        // on Blur
        const button = screen.getByRole('button');
        userEvent.click(button);
        await waitFor(() =>
          expect(getByText('This field is required')).toBeTruthy()
        );

        // on Change
        userEvent.click(input);
        const option = screen.getByText('banana');
        userEvent.click(option);
        expect(getByText('banana')).toBeTruthy();
        waitForElementToBeRemoved(() => getByText('This field is required'));
      });
    });

    describe('when is Creatable', () => {
      it('should allow option creation', async () => {
        const { getByText, getByRole } = render(
          <Dropdown
            options={dropdownProps.options}
            onChange={onChange}
            addNewOptions
          />
        );

        userEvent.type(getByRole('searchbox'), 'new');

        await waitFor(() => {
          expect(getByText('Create "new"')).toBeInTheDocument();
        });

        userEvent.click(getByText('Create "new"'));

        const onChangeCall = onChange.mock.calls.at(-1)![0];
        const createdOption = onChangeCall.target.value;
        await waitFor(() => {
          expect(createdOption.value).toBe('new');
          expect(createdOption.label).toBe('new');
        });
      });

      it('should handle option creation validation', async () => {
        const validKeyword = 'OK';
        const validInput = 'This is OK';
        const invalidInput = 'This is KO';

        const { getByText, getByRole, queryByText } = render(
          <Dropdown
            options={dropdownProps.options}
            onChange={onChange}
            isValidNewOption={(inputValue) =>
              inputValue?.includes(validKeyword)
            }
            addNewOptions
          />
        );

        userEvent.type(getByRole('searchbox'), invalidInput);

        await waitFor(() => {
          expect(
            queryByText(`Create "${invalidInput}"`)
          ).not.toBeInTheDocument();
        });

        userEvent.clear(getByRole('searchbox'));
        userEvent.type(getByRole('searchbox'), validInput);

        await waitFor(() => {
          expect(getByText(`Create "${validInput}"`)).toBeInTheDocument();
        });
      });

      it('should handle specific option structure creation', async () => {
        const customOptions = dropdownProps.options.map((option) => ({
          customValue: option.value,
          customLabel: option.label,
        }));
        const { getByText, getByRole } = render(
          <Dropdown
            options={customOptions}
            onChange={onChange}
            bindLabel={(option) => option.customLabel}
            getNewOptionData={(inputValue) => ({
              customValue: inputValue,
              customLabel: `custom ${inputValue}`,
              additionalEntry: 'extra',
            })}
            addNewOptions
          />
        );

        const userInput = 'hello';
        userEvent.type(getByRole('searchbox'), userInput);

        await waitFor(() => {
          expect(getByText(`custom ${userInput}`)).toBeInTheDocument();
        });

        userEvent.click(getByText(`custom ${userInput}`));

        const onChangeCall = onChange.mock.calls.at(-1)![0];
        const createdOption = onChangeCall.target.value;

        await waitFor(() => {
          expect(createdOption.customValue).toBe(userInput);
          expect(createdOption.customLabel).toBe(`custom ${userInput}`);
          expect(createdOption.additionalEntry).toBe('extra');
        });
      });
    });
  });

  describe('when options are Async', () => {
    describe('when is simple Dropdown', () => {
      it('should render the Dropdown component by default', async () => {
        const { getByText } = render(
          <Dropdown
            asyncOptions={() => Promise.resolve(options)}
            defaultOptions
          />
        );
        expect(getByText('Select...')).toBeInTheDocument();
      });

      it('should render the `asyncOptions` to the dropdown menu', async () => {
        const { getByText } = render(
          <Dropdown
            asyncOptions={() => Promise.resolve(options)}
            defaultOptions
          />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        await waitFor(async () => {
          expect(getByText('banana')).toBeTruthy();
          expect(getByText('avocado')).toBeTruthy();
          expect(getByText('orange')).toBeTruthy();
        });
      });

      it('should filter the `asyncOptions` if user types on the input', async () => {
        const { queryByText } = render(
          <Dropdown asyncOptions={() => Promise.resolve(options)} />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        await waitFor(async () => {
          expect(queryByText('banana')).toBeTruthy();
          expect(queryByText('avocado')).toBeTruthy();
          expect(queryByText('orange')).toBeTruthy();
        });
        userEvent.type(input, 'ban');
        await waitFor(async () => {
          expect(queryByText('banana')).toBeTruthy();
          expect(queryByText('avocado')).toBeFalsy();
          expect(queryByText('orange')).toBeFalsy();
        });
      });

      describe('when `defaultOptions` is provided with a different list', () => {
        it('should render different default options to the dropdown menu', async () => {
          const { getByText } = render(
            <Dropdown
              asyncOptions={() => Promise.resolve(options)}
              defaultOptions={[{ label: 'salmon' }]}
            />
          );
          const input = screen.getByRole('searchbox');
          userEvent.click(input);
          expect(getByText('salmon')).toBeTruthy();
        });

        it('should filter the options if user types on the input', async () => {
          const { getByText, queryByText } = render(
            <Dropdown
              asyncOptions={() => Promise.resolve(options)}
              defaultOptions={[{ label: 'salmon' }]}
            />
          );
          const input = screen.getByRole('searchbox');
          userEvent.click(input);
          expect(getByText('salmon')).toBeTruthy();
          userEvent.type(input, 'ban');
          await waitFor(async () => {
            expect(queryByText('banana')).toBeTruthy();
            expect(queryByText('avocado')).toBeFalsy();
            expect(queryByText('orange')).toBeFalsy();
          });
        });
      });

      it('should render the Dropdown component by default', async () => {
        render(
          <Dropdown
            asyncOptions={() => Promise.resolve(options)}
            mode="nested"
            defaultOptions
          />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        await waitFor(async () => {
          const nestedItem = screen.getByText('banana');
          expect(
            nestedItem.classList.contains('tk-select__option--nested')
          ).toBeTruthy();
        });
      });

      it('should show/hide options menu', async () => {
        const { getByText } = render(
          <Dropdown
            asyncOptions={() => Promise.resolve(options)}
            hideSelectedOptions
            closeMenuOnSelect
            enableTermSearch
            defaultOptions
          />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        await waitFor(async () => {
          expect(getByText('banana')).toBeTruthy();
          expect(getByText('avocado')).toBeTruthy();
          expect(getByText('orange')).toBeTruthy();
        });
      });

      it('should select first option', async () => {
        const { getByText } = render(
          <Dropdown
            asyncOptions={() => Promise.resolve(options)}
            noOptionMessage="no options message"
          />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        await waitFor(async () => {
          const option = screen.getByText('banana');
          userEvent.click(option);
          expect(getByText('banana')).toBeTruthy();
        });
        userEvent.type(input, 'zz');
        await waitFor(async () => {
          expect(screen.getByText('no options message')).toBeTruthy();
        });
      });

      it('should render costum render dropdown', async () => {
        const { container, getByText } = render(
          <Dropdown
            isMultiSelect
            asyncOptions={() => Promise.resolve(options)}
            optionRenderer={CustomComponent}
            displayArrowIndicator
            tagRenderer={CustomComponent}
            isInputClearable
            onChange={onChange}
            onClear={onClear}
          />
        );
        await waitFor(async () => {
          const input = screen.getByRole('searchbox');
          userEvent.click(input);
        });
        const option = screen.getByText('banana');
        userEvent.click(option);
        expect(getByText('banana')).toBeTruthy();
        const cross =
          container.querySelector('i') || fail('expected element to be found');
        userEvent.click(cross);
        expect(onClear).toBeCalled();
        expect(getByText('Select...')).toBeTruthy();
      });

      it('should call onInit function only once, when component is initialized', async () => {
        const dropdownComponent = render(
          <Dropdown
            asyncOptions={() => Promise.resolve(options)}
            onInit={onInit}
            value={undefined}
            isInitialized={false}
          />
        );
        expect(onInit).not.toHaveBeenCalled();

        dropdownComponent.rerender(
          <Dropdown
            asyncOptions={() => Promise.resolve(options)}
            onInit={onInit}
            value="value"
            isInitialized={true}
          />
        );
        expect(onInit).toHaveBeenCalledTimes(1);
        expect(onInit).toHaveBeenCalledWith('value');

        dropdownComponent.rerender(
          <Dropdown
            asyncOptions={() => Promise.resolve(options)}
            onInit={onInit}
            value="value2"
            isInitialized={true}
          />
        );
        expect(onInit).toHaveBeenCalledTimes(1);
        expect(onInit).toHaveBeenCalledWith('value');
      });
    });

    describe('when is Multiselect', () => {
      it('should render the Multiselect component by default', async () => {
        const { getByText } = render(
          <Dropdown
            asyncOptions={() => Promise.resolve(options)}
            isMultiSelect
          />
        );
        expect(getByText('Select...')).toBeInTheDocument();
      });

      it('should show/hide options menu', async () => {
        const { getByText } = render(
          <Dropdown
            asyncOptions={() => Promise.resolve(options)}
            isMultiSelect
            filterFunction={filterFunction}
          />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        await waitFor(async () => {
          expect(getByText('banana')).toBeTruthy();
          expect(getByText('avocado')).toBeTruthy();
          expect(getByText('orange')).toBeTruthy();
        });
      });

      it('should select first option', async () => {
        const { getByText } = render(
          <Dropdown
            asyncOptions={() => Promise.resolve(options)}
            isMultiSelect
          />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        await waitFor(async () => {
          const option = screen.getByText('banana');
          userEvent.click(option);
          expect(getByText('banana')).toBeTruthy();
        });
      });

      it('should clean selection', async () => {
        const { getByText, container } = render(
          <Dropdown
            asyncOptions={() => Promise.resolve(options)}
            isMultiSelect
          />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        await waitFor(async () => {
          const option = screen.getByText('banana');
          userEvent.click(option);
          const cross =
            container.querySelector('i') ||
            fail('expected element to be found');
          userEvent.click(cross);
          expect(getByText('Select...')).toBeTruthy();
        });
      });

      it('should render custom render dropdown', async () => {
        const { getByText } = render(
          <Dropdown
            isMultiSelect
            asyncOptions={() => Promise.resolve(options)}
            optionRenderer={CustomComponent}
            displayArrowIndicator
            tagRenderer={CustomComponent}
          />
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        await waitFor(async () => {
          const option = screen.getByText('banana');
          userEvent.click(option);
          expect(getByText('banana')).toBeTruthy();
        });
      });
    });

    describe('when search by term is enabled', () => {
      it('should render the header option when user starts typing', async () => {
        const { queryByText } = render(
          <Dropdown
            asyncOptions={() => Promise.resolve(options)}
            displayArrowIndicator
            enableTermSearch
            termSearchMessage="Search for term"
          />
        );

        const input = screen.getByRole('searchbox');
        userEvent.type(input, 'B');
        await waitFor(async () => {
          expect(queryByText(/Search for term/)).toBeInTheDocument();
        });
      });

      it('should select option header', async () => {
        const searchedTerm = 'BBBmous';
        const { getByText, queryByText } = render(
          <Dropdown
            isOptionDisabled={optionDisabled}
            isOptionSelected={optionSelected}
            bindValue={'bindValue'}
            asyncOptions={() => Promise.resolve(options)}
            displayArrowIndicator
            enableTermSearch
            onTermSearch={onTermSearch}
            onBlur={onBlur}
          />
        );
        const input = screen.getByRole('searchbox');
        await waitFor(async () => {
          userEvent.type(input, searchedTerm);
          fireEvent.mouseDown(input);
          //Select header option
          fireEvent.click(
            queryByText(/Search for term/) ||
              fail('expected element to be found')
          );
          expect(getByText('BBBmousBBBmous')).toBeInTheDocument();
        });
      });
    });

    describe('when is with Validation Component', () => {
      it('should be triggered on Blur and on Change', async () => {
        const { getByText } = render(
          <>
            <Button>Outside target</Button>
            <Validation
              validator={[Validators.Required]}
              errorMessage={{ required: 'This field is required' }}
            >
              <Dropdown
                isMultiSelect
                asyncOptions={() => Promise.resolve(options)}
                optionRenderer={CustomComponent}
                displayArrowIndicator
                tagRenderer={CustomComponent}
              />
            </Validation>
          </>
        );
        const input = screen.getByRole('searchbox');
        userEvent.click(input);
        // on Blur
        const button = screen.getByRole('button');
        userEvent.click(button);
        await waitFor(() =>
          expect(getByText('This field is required')).toBeTruthy()
        );
        // on Change
        await waitFor(async () => {
          userEvent.click(input);
          const option = screen.getByText('banana');
          userEvent.click(option);
          expect(getByText('banana')).toBeTruthy();
          waitForElementToBeRemoved(() => getByText('This field is required'));
        });
      });
    });

    describe('when is Creatable', () => {
      it('should allow option creation', async () => {
        const { getByText, getByRole } = render(
          <Dropdown
            asyncOptions={() => Promise.resolve(options)}
            defaultOptions
            onChange={onChange}
            addNewOptions
          />
        );

        userEvent.type(getByRole('searchbox'), 'new');

        await waitFor(() => {
          expect(getByText('Create "new"')).toBeInTheDocument();
        });

        userEvent.click(getByText('Create "new"'));

        const onChangeCall = onChange.mock.calls.at(-1)![0];
        const createdOption = onChangeCall.target.value;
        await waitFor(() => {
          expect(createdOption.value).toBe('new');
          expect(createdOption.label).toBe('new');
        });
      });

      it('should handle option creation validation', async () => {
        const validKeyword = 'OK';
        const validInput = 'This is OK';
        const invalidInput = 'This is KO';

        const { getByText, getByRole, queryByText } = render(
          <Dropdown
            asyncOptions={() => Promise.resolve(options)}
            defaultOptions
            onChange={onChange}
            isValidNewOption={(inputValue) =>
              inputValue?.includes(validKeyword)
            }
            addNewOptions
          />
        );

        userEvent.type(getByRole('searchbox'), invalidInput);

        await waitFor(() => {
          expect(
            queryByText(`Create "${invalidInput}"`)
          ).not.toBeInTheDocument();
        });

        userEvent.clear(getByRole('searchbox'));
        userEvent.type(getByRole('searchbox'), validInput);

        await waitFor(() => {
          expect(getByText(`Create "${validInput}"`)).toBeInTheDocument();
        });
      });

      it('should handle specific option structure creation', async () => {
        const customOptions = options.map((option) => ({
          customLabel: option.label,
        }));
        const { getByText, getByRole } = render(
          <Dropdown
            asyncOptions={() => Promise.resolve(customOptions)}
            defaultOptions
            onChange={onChange}
            bindLabel={(option) => option.customLabel}
            getNewOptionData={(inputValue) => ({
              customValue: inputValue,
              customLabel: `custom ${inputValue}`,
              additionalEntry: 'extra',
            })}
            addNewOptions
          />
        );

        const userInput = 'hello';
        userEvent.type(getByRole('searchbox'), userInput);

        await waitFor(() => {
          expect(getByText(`custom ${userInput}`)).toBeInTheDocument();
        });

        userEvent.click(getByText(`custom ${userInput}`));

        const onChangeCall = onChange.mock.calls.at(-1)![0];
        const createdOption = onChangeCall.target.value;

        await waitFor(() => {
          expect(createdOption.customValue).toBe(userInput);
          expect(createdOption.customLabel).toBe(`custom ${userInput}`);
          expect(createdOption.additionalEntry).toBe('extra');
        });
      });
    });
  });

  describe('when there are several options with same value', () => {
    it('should select only one option', () => {
      const options: LabelValue[] = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '1' },
        { label: 'Option 3 ', value: '1' },
      ];

      render(<Dropdown options={options} />);
      const input = screen.getByRole('searchbox');
      userEvent.click(input);
      userEvent.click(screen.getByText('Option 1'));
      userEvent.click(input);
      // First reference is the selected option on the input
      expect(
        screen
          .getAllByText('Option 1')[1]
          .classList.contains('tk-select__option--is-selected')
      ).toBeTruthy();
      expect(
        screen
          .getByText('Option 2')
          .classList.contains('tk-select__option--is-selected')
      ).toBeFalsy();
      expect(
        screen
          .getByText('Option 3')
          .classList.contains('tk-select__option--is-selected')
      ).toBeFalsy();
    });
  });
});
