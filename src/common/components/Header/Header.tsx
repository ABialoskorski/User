import { useLocation } from 'react-router-dom';
import { Routes } from '../../../AppRouting';
import { Img, Link, Links, Nav } from './Header.styles';
import { default as LogoImage } from '../../UI/assets/logo.svg';

interface HeaderLink {
  route: string;
  title: string;
}

export const Header = () => {
  const location = useLocation();
  const headerLinks: HeaderLink[] = [
    { route: Routes.USER_PROFILE, title: 'User Info' },
    { route: Routes.USER_FORM, title: 'Edit User' },
  ];

  return (
    <Nav>
      <Img src={LogoImage} alt='logo' />
      <Links>
        {headerLinks.map(({ route, title }) => (
          <Link to={`/${route}`} key={title} iscurrent={location.pathname.includes(route)}>
            {title}
          </Link>
        ))}
      </Links>
    </Nav>
  );
};
