import './EditRequest.scss';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editOneRequest } from '../../../redux/actions/index';
import ReturnToListButton from '../../buttons/LinkButton';
import useGetOneRequest from '../../../cusom-hooks/GetOneRequest';
import Form from '../../forms/FormRequest';

function Home() {
  const params = useParams();
  const dispatch = useDispatch();
  const listRequests = useGetOneRequest(params.id);
  const handleEdit = (values) => {
    dispatch(editOneRequest(values, params.id));
  };
  return (
    <main className='add-page'>
      <Container>
        <Row>
          <Col className='d-flex justify-content-end'>
            <ReturnToListButton link='/' />
          </Col>
        </Row>
      </Container>
      <Form title='Edit Request' action={handleEdit} initialData={listRequests?.rowData[0]} />;
    </main>
  );
}

export default Home;
