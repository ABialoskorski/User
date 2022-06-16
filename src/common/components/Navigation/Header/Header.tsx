import { useLocation } from 'react-router-dom';
import { Img, Link, Links, Nav } from './Header.styles';
import { default as LogoImage } from '../../../UI/assets/logo.svg';
import { useNavigation } from '../useNavigation';

export const Header = () => {
  const location = useLocation();
  const { headerLinks } = useNavigation();

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