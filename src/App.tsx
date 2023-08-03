import { useState } from 'react';
import { mockTableDataSets } from './constants';
import { TableDataSet } from './types';
import { DataSetSelect, Table } from './components';

const App = () => {
  const [selectedDataSet, setSelectedDataSet] = useState<TableDataSet>(
    mockTableDataSets[0]
  );

  const handleDataSetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDataSetId = Number(event.target.value);

    const newDataSet = mockTableDataSets.find(
      (dataSet) => dataSet.id === newDataSetId
    );

    setSelectedDataSet(newDataSet!);
  };

  const selectOptions = mockTableDataSets.map((dataSet) => ({
    value: dataSet.id,
    label: dataSet.name,
  }));

  return (
    <div>
      <DataSetSelect
        defaultValue={selectedDataSet.id}
        onChange={handleDataSetChange}
        options={selectOptions}
      />

      <Table dataSet={selectedDataSet} />
    </div>
  );
};

export default App;
