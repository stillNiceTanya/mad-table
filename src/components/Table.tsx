import { TableDataSet } from '../types';
import { getColumnAlign, getColumnValue } from './utils';

type TableProps = {
  dataSet: TableDataSet;
};

const Table = ({ dataSet }: TableProps) => {
  const tableHead = dataSet.header;
  const tableRows = dataSet.data;

  return (
    <table>
      <thead>
        <tr>
          {tableHead.map((column) => (
            <th key={column.id}>{column.caption}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableRows.map((rowData) => (
          <tr key={rowData.join()}>
            {rowData.map((columnValue, columnIndex) => (
              <td
                align={getColumnAlign(tableHead[columnIndex])}
                key={columnValue.toString()}
              >
                {getColumnValue(columnValue)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
