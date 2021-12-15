import { colDefsType } from './colDefsType';

export interface colDefs {
  field: string;
  headerName: string;
  type?: colDefsType;
  titleCase?: boolean;
}
