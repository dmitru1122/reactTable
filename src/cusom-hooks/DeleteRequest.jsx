import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOneRequest, deleteOneRequestReset } from '../redux/actions/index';

function useDeleteRequest() {
  const [id, setId] = useState();
  // const [status, setStatus] = useState('pending');
  const listRequests = useSelector((state) => state.requestData);
  const stat = useSelector((state) => state.deleteRequestStatus);
  const dispatch = useDispatch();
  console.log('rerender');
  listRequests.rowData.forEach((item) => {
    if (+item.id === +id && stat !== 'reject') {
      console.log('check pass, but it"s wrong');
      dispatch(deleteOneRequest(id));
    }
  });

  useEffect(() => {
    console.log(stat);
    // setStatus(stat);
    setTimeout(() => dispatch(deleteOneRequestReset()), 3000);
  }, [stat]);

  return { status: stat, setId };
}

export default useDeleteRequest;
