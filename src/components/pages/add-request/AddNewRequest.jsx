import './AddNewRequest.scss';
import { useDispatch } from 'react-redux';
import { addOneRequest } from '../../../redux/actions/index';
import Form from '../../forms/FormRequest';

function Home() {
  const dispatch = useDispatch();
  const handleAdd = (values, form) => {
    dispatch(addOneRequest(values));
    form.restart();
  };
  return (
    <main className='add-page'>
      <Form title='Add Request' action={handleAdd} />
    </main>
  );
}

export default Home;
