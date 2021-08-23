import React from 'react';
import { shallow } from 'enzyme';
import Title from './testComp';

const title = 'Test Title';
const wrapped = shallow(<Title>{title}</Title>);
describe('Title', () => {
  //   it('should render the Title Component correctly', () => {
  //     expect(wrapped).toMatchSnapshot();
  //   });
  it('renders the Titles children', () => {
    expect(wrapped.find('h1').text()).toEqual(title);
  });
});
