import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { fullHeaderData, rowData } from '../../../fakeDb/sampleData';
import ReturnToListButton from '../../buttons/LinkButton';
import Table from '../../table/Table';

const Request = () => {
  const params = useParams();
  const row = rowData.filter((item) => (item.id === params.id ? item : null));
  return (
    <main className='home'>
      <Container>
        <Row>
          <Col className='d-flex justify-content-end'>
            <ReturnToListButton link='/' />
          </Col>
        </Row>
      </Container>

      <Table headerData={fullHeaderData} rowData={row} />
    </main>
  );
};

export default Request;
