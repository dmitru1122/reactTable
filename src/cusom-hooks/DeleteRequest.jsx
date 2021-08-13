// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteOneRequest, deleteOneRequestReset } from '../redux/actions/index';

// // export function useDeleteRequest(props) {
// //   const [id, setId] = useState();
// //   // const [status, setStatus] = useState('pending');
// //   const { listRequests, status } = props;
// //   // const stat = useSelector((state) => state.deleteRequestStatus);
// //   const dispatch = useDispatch();
// //   console.log('rerender');
// //   console.log(id);
// //   listRequests.rowData.forEach((item) => {
// //     if (+item.id === +id) {
// //       console.log('check pass, but it"s wrong');
// //       dispatch(deleteOneRequest(id));
// //     }
// //   });
// // }

// export function deleteRequest() {
//   console.log('rrrww22');
//   const [id, setId] = useState();
//   const dispatch = useDispatch();
//   dispatch(deleteOneRequest(id));

//   return setId;
// }

// export function watchDeleteStatus() {
//   console.log('rrr');
//   const status = useSelector((state) => state.deleteRequestStatus);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (status !== 'waiting') {
//       setTimeout(() => dispatch(deleteOneRequestReset()), 3000);
//     }
//   }, [status]);

//   return status;
// }
// //   useEffect(() => {
// //     console.log(status);
// //     // setStatus(stat);
// //     setTimeout(() => dispatch(deleteOneRequestReset()), 3000);
// //   }, [status]);

// //   return { status, setId };
// // }

// // function mapStateToProps(state) {
// //   return { listRequests: state.requestData, status: state.deleteRequestStatus };
// // }

// // export default connect(mapStateToProps)(useDeleteRequest);
