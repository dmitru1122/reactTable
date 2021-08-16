import './EditRequest.scss';
import { Container, Row, Col } from 'reactstrap';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from 'carbon-components-react';
import { Undo32 as Undo } from '@carbon/icons-react';

import { editOneRequest } from '../../../redux/actions/index';
import useGetOneRequest from '../../../cusom-hooks/GetOneRequest';
import Form from '../../forms/FormRequest';

function Home() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const listRequests = useGetOneRequest(params.id);

  const handleClickReturn = () => {
    history.push('/');
  };
  const handleEdit = (values) => {
    dispatch(editOneRequest(values, params.id));
    // add functin to handle success and push router to the list
    handleClickReturn();
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
      <Form title='Edit Request' action={handleEdit} initialData={listRequests?.rowData[0]} />;
    </main>
  );
}

export default Home;
