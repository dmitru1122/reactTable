import './HomePage.scss';
import useGetRequestData from '../../../cusom-hooks/GetListRequests';
import Table from '../../table/Table';
import SpinnerCs from '../../spinner-cs/Spinner';

function Home() {
  const listRequests = useGetRequestData();

  return (
    <main className='home'>
      {listRequests ? (
        <Table headerData={listRequests?.headerData} rowData={listRequests?.rowData} />
      ) : (
        <div className='d-flex align-items-center justify-content-center'>
          <SpinnerCs />
        </div>
      )}
    </main>
  );
}

export default Home;
