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
function filter(data, checkCompare) {
  const interalArray = [];
  let internalObject = {};

  data.forEach((item) => {
    checkCompare.forEach((checkVal) => {
      internalObject[checkVal.key] = item[checkVal.key];
    });
    internalObject.id = item.id;
    interalArray.push(internalObject);
    internalObject = {};
  });
  return interalArray;
}
export const getDBFull = () => {
  const resultWithFilter = filter(fakeDB, headerData);
  return { rowData: resultWithFilter, headerData };
};

function returnOne(data, id) {
  const internalArr = data.filter((item) => (+item.id === +id ? item : null));
  return internalArr;
}

export const getOne = (id) => {
  const result = returnOne(fakeDB, id);
  return { rowData: result, headerData: fullHeaderData };
};

// function deleteItem(dataBase, id) {}

export const deleteOne = () => {
  // const result = deleteItem(fakeDB, id);
  return true;
};

export function editOne(data, id) {
  // const resArr = [...fakeDB];
  const resArr = fakeDB.map((item) => (+item.id === +id ? data : item));
  console.log(data);
  console.log(id);
  return resArr;
}

export function addOne(data) {
  const internalData = { ...data, id: fakeDB.length };
  const resArr = fakeDB.push(internalData);
  return { resArr };
}
