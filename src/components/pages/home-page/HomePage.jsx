import './HomePage.scss';

import { Spinner } from 'reactstrap';
import useGetRequestData from '../../../cusom-hooks/GetListRequests';
import Table from '../../table/Table';

function Home() {
  const listRequests = useGetRequestData();

  return (
    <main className='home'>
      {listRequests ? (
        <Table headerData={listRequests?.headerData} rowData={listRequests?.rowData} />
      ) : (
        <div className='d-flex align-items-center justify-content-center'>
          <Spinner color='dark'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      )}
    </main>
  );
}

export default Home;
