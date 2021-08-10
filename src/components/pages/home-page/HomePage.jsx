import './HomePage.scss';
import Table from '../../table/Table';
import { headerData, rowData } from '../../../fakeDb/sampleData';

function Home() {
  return (
    <main className='home'>
      <Table headerData={headerData} rowData={rowData} />
    </main>
  );
}

export default Home;
