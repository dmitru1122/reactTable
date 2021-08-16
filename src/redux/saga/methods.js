const rowData = () => JSON.parse(localStorage.rowData);
const headerData = () => JSON.parse(localStorage.headerData);
const fullHeaderData = () => JSON.parse(localStorage.fullHeader);

// const headerData = [
//   {
//     key: 'purpose',
//     header: 'Purpose',
//   },
//   {
//     key: 'firstName',
//     header: 'First Name',
//   },
// ];

// const fullHeaderData = [
//   {
//     key: 'purpose',
//     header: 'Purpose',
//   },
//   {
//     key: 'firstName',
//     header: 'First Name',
//   },
//   {
//     key: 'lastName',
//     header: 'Last Name',
//   },
//   {
//     key: 'gender',
//     header: 'Purpose',
//   },
// ];

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
  const resultWithFilter = filter(rowData(), headerData());
  return { rowData: resultWithFilter, headerData: headerData() };
};

function returnOne(data, id) {
  const internalArr = data.filter((item) => (+item.id === +id ? item : null));
  return internalArr;
}

export const getOne = (id) => {
  const result = returnOne(rowData(), id);
  return { rowData: result, headerData: fullHeaderData() };
};

export const deleteOne = (id) => {
  const result = rowData().filter((item) => (+item.id !== +id ? item : null));
  localStorage.setItem('rowData', JSON.stringify(result));
};

export function editOne(data, id) {
  const resArr = rowData().map((item) => (+item.id === +id ? data : item));
  localStorage.setItem('rowData', JSON.stringify(resArr));
  //   return resArr;
}

export function addOne(data) {
  const internalData = { ...data, id: (+rowData()[rowData().length - 1].id + +1).toString() };
  const resArr = JSON.parse(localStorage.rowData);
  resArr.push(internalData);
  localStorage.setItem('rowData', JSON.stringify(resArr));
  //   return { resArr };
}
