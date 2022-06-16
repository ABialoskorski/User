import { Key, ReactNode } from 'react';
import { MenuProps } from 'antd/es/menu';
import { Link } from 'react-router-dom';
import { useNavigation } from '../useNavigation';
import { Menu } from './SideMenu.styles';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: ReactNode, key?: Key | null, icon?: ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const SideMenu = () => {
  const { headerLinks } = useNavigation();
  const items: MenuItem[] = headerLinks.map(({ route, title, icon }) =>
    getItem(
      <Link to={`/${route}`} key={route}>
        {title}
      </Link>,
      'link',
      icon,
    ),
  );

  return <Menu items={items} />;
};
