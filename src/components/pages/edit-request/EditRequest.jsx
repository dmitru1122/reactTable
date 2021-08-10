import './EditRequest.scss';
import { Container, Row, Col } from 'reactstrap';
import ReturnToListButton from '../../buttons/LinkButton';
import useGetRequestData from '../../../cusom-hooks/GetListRequests';
import Form from '../../forms/FormRequest';

function Home() {
  const listRequests = useGetRequestData();
  console.log(listRequests);
  return (
    <main className='add-page'>
      <Container>
        <Row>
          <Col className='d-flex justify-content-end'>
            <ReturnToListButton link='/' />
          </Col>
        </Row>
      </Container>
      <Form title='Edit Request' />;
    </main>
  );
}

export default Home;
