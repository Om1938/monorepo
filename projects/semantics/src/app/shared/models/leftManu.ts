export interface MenuList {
  title: string;
  onClick?: (e?: any) => void;
  children?: MenuList[];
}
