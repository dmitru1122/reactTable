import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Table.scss';
import { Spinner } from 'reactstrap';
import { useEffect } from 'react';
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
  Button,
} from 'carbon-components-react';
import { Delete16 as Delete, Edit32 as Edit, Add32 as Add } from '@carbon/icons-react';
// import { watchDeleteStatus } from '../../cusom-hooks/DeleteRequest';
import { deleteOneRequest, deleteOneRequestReset } from '../../redux/actions/index';

const propTypes = {
  headerData: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string, header: PropTypes.string })),
  rowData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      protocol: PropTypes.string,
      port: PropTypes.number,
      rule: PropTypes.string,
    }),
  ),
};
const defaultProps = {
  headerData: [{ key: 'name', header: 'Name' }],
  rowData: [{ id: '', name: '', protocol: '', port: 0, rule: '' }],
};

function TableRequests(props) {
  const { rowData, headerData } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const status = useSelector((state) => state.deleteRequestStatus);

  const handleClickEdit = (routerName, id) => {
    history.push(`/${routerName}/${id}`);
  };

  const openFullRequestInfo = (id) => {
    history.push(`/request/${id}`);
  };
  const handleDeleteRow = (id) => {
    dispatch(deleteOneRequest(id));
  };
  useEffect(() => {
    if (status !== 'waiting') {
      setTimeout(() => dispatch(deleteOneRequestReset()), 3000);
    }
    console.log(status);
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
                <Button
                  tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                  onClick={() => handleClickEdit('addRequest', '0')}
                  renderIcon={Add}
                  kind='primary'>
                  Add new
                </Button>
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
                  <TableRow key={row.id} className='table__row__cell'>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id} onClick={() => openFullRequestInfo(row.id)}>
                        {cell.value}
                      </TableCell>
                    ))}
                    <TableCell className='table__row__cell--short'>
                      <Button
                        hasIconOnly
                        renderIcon={Delete}
                        tooltipAlignment='center'
                        tooltipPosition='bottom'
                        iconDescription='Delete row'
                        kind='ghost'
                        onClick={() => handleDeleteRow(row.id)}
                      />
                      <Button
                        hasIconOnly
                        renderIcon={Edit}
                        onClick={() => handleClickEdit('editRequest', row.id)}
                        tooltipAlignment='center'
                        tooltipPosition='bottom'
                        iconDescription='Edit row'
                        kind='ghost'
                      />
                      <Spinner color='dark' className='visually-hidden'>
                        <span className='visually-hidden'>Loading...</span>
                      </Spinner>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
    </div>
  );
}

TableRequests.propTypes = propTypes;
TableRequests.defaultProps = defaultProps;

export default TableRequests;
