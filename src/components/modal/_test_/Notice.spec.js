import React from 'react';
import { mount } from 'enzyme';
import Notice from '../Notice';

const prop = {
  isShowModal: true,
  title: 'Test',
  description: 'test description',
  closeAction: () => {
    let i = 0;
    i += 1;
    return i;
  },
};

const setUp = (props) => mount(<Notice {...props} />);

// const state = { setState: () => jest.fn() };
// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initial) => [initial, state.setState],
// }));
// const spy = jest.spyOn(state, 'setState');

describe('Notice', () => {
  it('renders component without crashing', () => {
    mount(<Notice />);
  });

  describe('passing props', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setUp(prop);
    });

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

    describe('Modal header', () => {
      it('should to be in the Document', () => {
        expect(wrapper.find('.modal-header').length).toEqual(1);
        expect(wrapper.find('.modal-header').children()).toHaveLength(2);
      });
      it('should contains correct title', () => {
        expect(wrapper.find('.modal-title').text()).toBe(prop.title);
      });

      it('should handled click', () => {
        const element = wrapper.find('ModalHeader').find('button');
        expect(wrapper.find('Modal').prop('isOpen')).toBe(true);
        element.simulate('click');
        expect(wrapper.find('Modal').prop('isOpen')).toBe(false);
      });
    });

    describe('ModalBody', () => {
      it('should render', () => {
        expect(wrapper.find('.modal-body').length).toEqual(1);
        expect(wrapper.find('.modal-body').children()).toHaveLength(1);
      });
      it('should has correct description', () => {
        expect(wrapper.find('.modal-body').text()).toEqual(prop.description);
      });
      it('should has empty description', () => {
        const component = mount(<Notice isShowModal={prop.isShowModal} title={prop.title} description={null} />);
        expect(component.find('.modal-body').text()).toEqual('');
      });
    });
    describe('ModalFooter', () => {
      it('should render modal footer', () => {
        expect(wrapper.find('.modal-footer').length).toEqual(1);
        expect(wrapper.find('.modal-footer').children()).toHaveLength(1);
      });

      it('should handled click', () => {
        const element = wrapper.find('ModalFooter').find('button');
        expect(wrapper.find('Modal').prop('isOpen')).toBe(true);
        element.simulate('click');
        expect(wrapper.find('Modal').prop('isOpen')).toBe(false);
      });
    });
  });
  describe('Haven"t props', () => {
    const wrapper = mount(<Notice />);
    it('dosn"t haven"t modal content', () => {
      expect(wrapper.find('.modal-content').length).toEqual(0);
      expect(wrapper.find('.modal-content').children()).toHaveLength(0);
    });
  });
});
