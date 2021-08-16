import './AddNewRequest.scss';
import { Container, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from 'carbon-components-react';
import { Undo32 as Undo } from '@carbon/icons-react';
import { addOneRequest } from '../../../redux/actions/index';
import Form from '../../forms/FormRequest';

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleAdd = (values, form) => {
    dispatch(addOneRequest(values));
    form.restart();
  };
  const handleClickReturn = () => {
    history.push('/');
  };
  return (
    <main className='add-page'>
      <Container>
        <Row>
          <Col className='d-flex justify-content-end'>
            <Button renderIcon={Undo} kind='ghost' onClick={handleClickReturn}>
              Return to the list requests
            </Button>
          </Col>
        </Row>
      </Container>
      <Form title='Add Request' action={handleAdd} />
    </main>
  );
}

export default Home;
