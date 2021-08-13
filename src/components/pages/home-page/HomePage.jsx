import './HomePage.scss';

// import { Spinner } from 'reactstrap';
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
          <div className='spinner-border text-primary' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;
