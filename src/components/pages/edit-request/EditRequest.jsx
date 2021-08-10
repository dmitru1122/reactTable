import './EditRequest.scss';
import { Container, Row, Col } from 'reactstrap';
import ReturnToListButton from '../../buttons/LinkButton';
import Form from '../../forms/FormRequest';

function Home() {
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
