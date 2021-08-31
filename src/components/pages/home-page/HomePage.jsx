import { useGetRequestData } from '../../../cusom-hooks/GetListRequests';
import LoadTable from '../../load-table/LoadTable';

function Home() {
  const listRequests = useGetRequestData();

  return (
    <main className='home'>
      <LoadTable data={listRequests} />
    </main>
  );
}

export default Home;
