/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-props-no-spreading */
import './Table.scss';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Button,
} from 'carbon-components-react';
import { Delete16 as Delete, Edit32 as Edit } from '@carbon/icons-react';
import { headerData, rowData } from './sampleData';

function Home() {
  return (
    <div className='table'>
      <DataTable rows={rowData} headers={headerData} radio isSortable>
        {({ rows, headers, getHeaderProps, getTableProps }) => (
          <TableContainer title='List of requests' radio>
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
                      <>
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      </>
                    ))}
                    <TableCell className='table__row__cell--short'>
                      <Button
                        hasIconOnly
                        renderIcon={Delete}
                        tooltipAlignment='center'
                        tooltipPosition='bottom'
                        iconDescription='Delete row'
                        kind='ghost'
                      />
                      <Button
                        hasIconOnly
                        renderIcon={Edit}
                        tooltipAlignment='center'
                        tooltipPosition='bottom'
                        iconDescription='Edit row'
                        kind='ghost'
                      />
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

// function Home() {
//   return (
//     <div className='tabel'>
//       <DataTable rows={rowData} headers={headerData} radio>
//         {({ rows, headers, getHeaderProps, getSelectionProps, getTableProps, getTableContainerProps }) => (
//           <TableContainer title='DataTable' description='With radio selection' {...getTableContainerProps()}>
//             <Table {...getTableProps()}>
//               <TableHead>
//                 <TableRow>
//                   {headers.map((header) => (
//                     <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {rows.map((row) => (
//                   <TableRow>
//                     <TableSelectRow {...getSelectionProps({ row })} />
//                     {row.cells.map((cell) => (
//                       <TableCell key={cell.id}>{cell.value}</TableCell>
//                     ))}
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}
//       </DataTable>
//     </div>
//   );
// }

export default Home;
