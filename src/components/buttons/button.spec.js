import React from 'react';
import { shallow } from 'enzyme';
import Buttons from './Buttons';

describe('Button', () => {
  it('shold render button', () => {
    const buttonLabel = 'hi';
    const component = shallow(<Buttons buttonLabel={buttonLabel} />);
    expect(component.find('[data-test="default-btn"]').text()).toContain('hi');
  });
  it('should render add button', () => {
    const type = 'add';
    const component = shallow(<Buttons type={type} />);
    expect(component.find('.button-add').text()).toContain('Add new');
  });
  it('should render delete button', () => {
    const type = 'delete';
    const component = shallow(<Buttons type={type} />);
    expect(component.find('[iconDescription="Delete row"]').length).toBe(1);
  });
  it('should render edit button', () => {
    const type = 'edit';
    const component = shallow(<Buttons type={type} />);
    expect(component.find('[iconDescription="Edit row"]').length).toBe(1);
  });
});
