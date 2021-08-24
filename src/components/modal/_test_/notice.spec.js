import React from 'react';
import { mount, shallow } from 'enzyme';
import Notice from '../Notice';

const prop = {
  isShowModal: true,
  title: 'Test',
  description: 'test description',
};
describe('Notice', () => {
  it('renders component without crashing', () => {
    shallow(<Notice />);
  });

  describe('passing props', () => {
    const wrapper = mount(<Notice isShowModal={prop.isShowModal} title={prop.title} description={prop.description} />);
    it('contains isShow value', () => {
      expect(wrapper.props().isShowModal).toEqual(prop.isShowModal);
    });
    it('contains title value', () => {
      expect(wrapper.props().title).toEqual(prop.title);
    });
    it('contains description value', () => {
      expect(wrapper.props().description).toEqual(prop.description);
    });
    it('modal content', () => {
      expect(wrapper.find('.modal-content').length).toEqual(1);
      expect(wrapper.find('.modal-content').children()).toHaveLength(3);
    });
    describe('modal header', () => {
      it('exist', () => {
        expect(wrapper.find('.modal-header').length).toEqual(1);
        expect(wrapper.find('.modal-header').children()).toHaveLength(2);
      });
      it('contains correct title', () => {
        expect(wrapper.find('.modal-title').text()).toBe(prop.title);
      });
    });
    describe(' modal boby', () => {
      it('should render', () => {
        expect(wrapper.find('.modal-body').length).toEqual(1);
        expect(wrapper.find('.modal-body').children()).toHaveLength(1);
      });
      it('has correct description', () => {
        expect(wrapper.find('.modal-body').text()).toEqual(prop.description);
      });
      it('has empty description', () => {
        const component = mount(<Notice isShowModal={prop.isShowModal} title={prop.title} description={null} />);
        expect(component.find('.modal-body').text()).toEqual('');
      });
    });
    it('should render modal footer', () => {
      expect(wrapper.find('.modal-footer').length).toEqual(1);
      expect(wrapper.find('.modal-footer').children()).toHaveLength(1);
    });
  });
  describe('Hasn"t props', () => {
    const wrapper = mount(<Notice />);
    it('dosn"t has modal content', () => {
      expect(wrapper.find('.modal-content').length).toEqual(0);
      expect(wrapper.find('.modal-content').children()).toHaveLength(0);
    });
  });
});
