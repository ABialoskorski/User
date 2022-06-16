import { useLocation } from 'react-router-dom';
import { Img, Paragraph, Nav } from './Header.styles';
import { default as LogoImage } from '../../../UI/assets/logo.svg';
import { useNavigation } from '../useNavigation';

export const Header = () => {
  const location = useLocation();
  const { headerLinks } = useNavigation();

  return (
    <Nav>
      <Img src={LogoImage} alt='logo' />
        {headerLinks.map(({ route, title }) =>
          location.pathname.includes(route) ? (
            <Paragraph key={title}>
              {title}
            </Paragraph>
          ) : null,
        )}
    </Nav>
  );
};
