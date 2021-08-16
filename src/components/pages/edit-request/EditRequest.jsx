import './EditRequest.scss';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { editOneRequest } from '../../../redux/actions/index';
import useGetOneRequest from '../../../cusom-hooks/GetOneRequest';
import Form from '../../forms/FormRequest';

const propTypes = {
  id: PropTypes.string,
};
const defaultProps = {
  id: '',
};

function Edit(props) {
  const { id } = props;
  const dispatch = useDispatch();
  const listRequests = useGetOneRequest(id);
  const handleEdit = (values) => {
    dispatch(editOneRequest(values, id));
  };

  return (
    <main className='add-page'>
      <Form title='Edit Request' action={handleEdit} initialData={listRequests?.rowData[0]} />;
    </main>
  );
}

Edit.propTypes = propTypes;
Edit.defaultProps = defaultProps;

export default Edit;
