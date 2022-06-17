import { ReactNode } from 'react';

export interface HeaderLink {
  route: string;
  title: string;
  icon?: ReactNode;
}
export type UseNavigation = () => {
  headerLinks: HeaderLink[];
};
