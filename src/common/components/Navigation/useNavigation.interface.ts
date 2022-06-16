export interface HeaderLink {
  route: string;
  title: string;
  icon?: any;
}
export type UseNavigation = () => {
  headerLinks: HeaderLink[];
};
