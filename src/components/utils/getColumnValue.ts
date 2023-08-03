import { ColumnValue } from '../../types';

const getColumnValue = (value: ColumnValue): string => {
  if (typeof value === 'object') {
    return getColumnValue(value.d);
  }

  if (typeof value === 'boolean') {
    return value ? '✅' : '❌';
  }

  return value.toString();
};

export default getColumnValue;
