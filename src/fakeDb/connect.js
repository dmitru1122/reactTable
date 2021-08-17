import fakeDB from './db.json';

export const headerData = [
  {
    key: 'purpose',
    header: 'Purpose',
  },
  {
    key: 'firstName',
    header: 'First Name',
  },
];

export const fullHeaderData = [
  {
    key: 'purpose',
    header: 'Purpose',
  },
  {
    key: 'firstName',
    header: 'First Name',
  },
  {
    key: 'lastName',
    header: 'Last Name',
  },
  {
    key: 'gender',
    header: 'Purpose',
  },
];
export function createLoacalStorage() {
  let check = localStorage.getItem('rowData') ? null : localStorage.setItem('rowData', JSON.stringify(fakeDB));
  check = localStorage.getItem('headerData') ? null : localStorage.setItem('headerData', JSON.stringify(headerData));
  check = localStorage.getItem('fullHeader')
    ? null
    : localStorage.setItem('fullHeader', JSON.stringify(fullHeaderData));
  return check;
}
