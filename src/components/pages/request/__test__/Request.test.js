import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Spinner from '../../../spinner-cs/Spinner';
import Table from '../../../table/Table';
import Request from '../Request';
import { initialState } from '../../../../redux/mockData';
import { useGetOneRequest } from '../../../../cusom-hooks/GetOneRequest';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '2' }),
}));

jest.mock('../../../../cusom-hooks/GetOneRequest');

const setUp = (store) =>
  mount(
    <Provider store={store}>
      <Request />
    </Provider>,
  );

const fullRequestInfo = {
  2: {
    headerData: [
      { key: 'purpose', header: 'Purpose' },
      { key: 'firstName', header: 'First Name' },
      { key: 'lastName', header: 'Last Name' },
      { key: 'gender', header: 'Purpose' },
    ],
    rowData: [{ id: '2', purpose: 'Job proposition', firstName: 'Innaghfg', lastName: 'vbhnv', gender: 'female' }],
  },
};

describe('Component Page', () => {
  const mockStore = configureStore();
  const store = mockStore(initialState);
  let component;

  describe('loading', () => {
    beforeEach(() => {
      component = setUp(store);
    });

    it('should render cases container', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render request without crashing', () => {
      expect(component).toBeTruthy();
    });

    it('should render spinner', () => {
      const element = <Spinner />;
      expect(component.contains(element)).toBeTruthy();
    });
  });

  it('should render Table', () => {
    const element = <Table headerData={fullRequestInfo[2].headerData} rowData={fullRequestInfo[2].rowData} />;

    useGetOneRequest.mockReturnValue({
      headerData: fullRequestInfo[2].headerData,
      rowData: fullRequestInfo[2].rowData,
    });
    const wrapper = setUp(store);
    expect(wrapper.contains(element)).toBeTruthy();
  });
});
