import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import SpinnerCs from '../../spinner-cs/Spinner';
// import { fullHeaderData, rowData } from '../../../fakeDb/sampleData';
import useGetOneRequest from '../../../cusom-hooks/GetOneRequest';

import ReturnToListButton from '../../buttons/LinkButton';
import Table from '../../table/Table';

const Request = () => {
  const params = useParams();
  const listRequests = useGetOneRequest(params.id);
  return (
    <main className='home'>
      <Container>
        <Row>
          <Col className='d-flex justify-content-end'>
            <ReturnToListButton link='/' />
          </Col>
        </Row>
      </Container>
      {listRequests ? (
        <Table headerData={listRequests?.headerData} rowData={listRequests.rowData} />
      ) : (
        <div className='d-flex align-items-center justify-content-center'>
          <SpinnerCs />
        </div>
      )}
    </main>
  );
};

export default Request;
