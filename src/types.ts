export type ColumnType = 'string' | 'float' | 'integer' | 'boolean' | 'date';
export type ColumnAlign = 'left' | 'center' | 'right';

export type Header = {
  id: string;
  type: ColumnType;
  caption: string;
  align?: ColumnAlign;
};

type PrimitiveData = string | number | boolean;
type ComplexData = {
  d: PrimitiveData;
  [key: string]: unknown;
};

export type ColumnValue = PrimitiveData | ComplexData;

type RowData = ColumnValue[];

export type TableDataSet = {
  id: number;
  name: string;
  header: Header[];
  data: RowData[];
};
