import { ColumnAlign, Header } from '../../types';

const getColumnAlign = (header: Header): ColumnAlign => {
  const { align, type } = header;

  if (align) {
    return align;
  }

  switch (type) {
    case 'boolean':
      return 'center';
    case 'float':
    case 'integer':
      return 'right';
    case 'string':
    default:
      return 'left';
  }
};

export default getColumnAlign;
