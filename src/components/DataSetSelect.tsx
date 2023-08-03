type DataSetSelectProps = {
  defaultValue: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: number; label: string }[];
};

const DataSetSelect = ({
  defaultValue,
  onChange,
  options,
}: DataSetSelectProps) => (
  <select name="dataSetSelect" defaultValue={defaultValue} onChange={onChange}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default DataSetSelect;
