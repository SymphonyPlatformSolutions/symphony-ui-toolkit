import { shallow } from 'enzyme';
import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelTooltipDecorator from '../../../src/components/label-tooltip-decorator/LabelTooltipDecorator';

describe('LabelTooltipDecorator Component', () => {
  const id = 'my-id-provided';
  const tooltipText = 'This is a tooltip text';
  const tooltipCloseLabel = 'Close';
  describe('LabelTooltipDecorator test suite => ', () => {
    it('render a TextField with default props and initial value and test if a input html tag is used', () => {
      const wrapper = shallow(<LabelTooltipDecorator label="My label" />);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.hasClass('tk-input-group__header')).toBe(true);
    });
    it('should display a label if provided', () => {
      const id = 'textfield-1234567890';
      let wrapper = shallow(<LabelTooltipDecorator />);
      expect(wrapper.find('label.tk-label').length).toBe(0);
      wrapper = shallow(<LabelTooltipDecorator label="LABEL" id={id} />);
      expect(wrapper.find('label.tk-label').text()).toEqual('LABEL');
      expect(wrapper.find(`label[htmlFor="${id}"]`)).toHaveLength(1);
    });
    it('should display a tooltip if provided', () => {

      let wrapper = shallow(<LabelTooltipDecorator />);
      expect(wrapper.find('Icon').length).toBe(0);
      wrapper = shallow(
        <LabelTooltipDecorator
          id={id}
          tooltip={tooltipText}
          tooltipCloseLabel={tooltipCloseLabel}
        />
      );
      expect(wrapper.find('Icon').length).toBe(1);
      expect(wrapper.find('Icon').prop('iconName')).toBeDefined();
      expect(wrapper.find('Tooltip').length).toBe(1);
      expect(wrapper.find('Tooltip').prop('id')).toEqual(id);
      expect(wrapper.find('Tooltip').prop('description')).toEqual(tooltipText);
      expect(wrapper.find('Tooltip').prop('closeLabel')).toEqual(
        tooltipCloseLabel
      );
    });
  });
  describe('should open and close the tooltip Component', () => {
    it('should handleClickIcon be triggered', async () => {
      const { getByText } = render(<LabelTooltipDecorator
        id={id}
        tooltip={tooltipText}
        tooltipCloseLabel={tooltipCloseLabel}
      />
      );
      const icon = document.querySelector('i.tk-icon-info-round');
      userEvent.click(icon);
      const description = getByText(tooltipText);
      await waitFor(() => expect(description).toBeTruthy());

      const cta = getByText(tooltipCloseLabel);
      userEvent.click(cta);
      waitForElementToBeRemoved(cta);
    });
  });
});
