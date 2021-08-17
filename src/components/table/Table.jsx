import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Table.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DataTable,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from 'carbon-components-react';
import { deleteOneRequest, deleteOneRequestReset } from '../../redux/actions/index';
import Modal from '../modal/Modal';
import Notice from '../modal/Notice';
import SpinnerCS from '../spinner-cs/Spinner';

const propTypes = {
  headerData: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string, header: PropTypes.string })),
  rowData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      purpose: PropTypes.string,
    }),
  ),
};
const defaultProps = {
  headerData: [
    { key: 'purpose', header: 'Purpose' },
    { key: 'firstName', header: 'First Name' },
  ],
  rowData: [{ id: '', firstName: '', purpose: '' }],
};

function TableRequests(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { rowData, headerData } = props;
  const [deleting, setDeleting] = useState({ status: 'beforeAction', id: 0 });
  const status = useSelector((state) => state.deleteRequestStatus);

  const openFullRequestInfo = (id) => {
    history.push(`/request/${id}`);
  };
  const handleClickDelete = (id) => {
    setDeleting({ status: 'working', id });
    dispatch(deleteOneRequest(id));
  };
  useEffect(() => {
    let reset = 0;

    if (status === 'resolve') {
      setDeleting({ status: 'success', id: 0 });
      reset = setTimeout(() => {
        dispatch(deleteOneRequestReset());
        setDeleting({ status: false, id: 0 });
      }, 5000);
    }
    if (status === 'reject') {
      setDeleting({ status: 'reject', id: 0 });
      reset = setTimeout(() => {
        dispatch(deleteOneRequestReset());
        setDeleting({ status: false, id: 0 });
      }, 5000);
    }
    return () => {
      clearTimeout(reset);
    };
  }, [status]);
  return (
    <div className='table'>
      <DataTable rows={rowData} headers={headerData} isSortable>
        {({ rows, headers, getHeaderProps, getTableProps, onInputChange, getBatchActionProps }) => (
          <TableContainer title='List of requests'>
            <TableToolbar>
              <TableToolbarContent>
                <TableToolbarSearch
                  tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                  onChange={onInputChange}
                />
                {/* <Button
                  tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                  onClick={() => handleClickEdit('addRequest', '0')}
                  renderIcon={Add}
                  kind='primary'>
                  Add new
                </Button> */}
                <Modal
                  type='add'
                  title='Add request'
                  buttonLabel='I have a component'
                  description='hi'
                  action='Delete'
                />
              </TableToolbarContent>
            </TableToolbar>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
                  ))}
                  <TableHeader className='bx--table-sort-v2__ico'>Edit</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id} className='table__row'>
                    {deleting.status === 'working' && deleting.id === row.id ? (
                      <td id='spin' className='table__row__cell--spinner' colSpan={row.cells.length + 1}>
                        <SpinnerCS />
                      </td>
                    ) : (
                      <>
                        {row.cells.map((cell) => (
                          <TableCell key={cell.id} onClick={() => openFullRequestInfo(row.id)}>
                            {cell.value}
                          </TableCell>
                        ))}
                        <TableCell className='table__row__cell--short'>
                          <Modal
                            type='delete'
                            title='Delete'
                            buttonLabel='I have a component'
                            description='Are you sure you want to go on?'
                            action='Delete'
                            continueAction={() => handleClickDelete(row.id)}
                          />

                          <Modal type='edit' title='Edit row' action='Delete' id={row.id} />
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
      <Notice isShowModal={deleting.status === 'success'} title='Warning' description='Request was deleted' />
      <Notice isShowModal={deleting.status === 'reject'} title='Error' description='Something was wrong' />
    </div>
  );
}

TableRequests.propTypes = propTypes;
TableRequests.defaultProps = defaultProps;

export default TableRequests;
