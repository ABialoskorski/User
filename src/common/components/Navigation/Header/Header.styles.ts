import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Colors } from '../../../UI/cssVariables';
import { LinkProps } from './Header.interface';

export const Nav = styled.nav`
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  height: 6rem;
  padding: 2rem;
  align-items: center;
  background-color: ${Colors.lightGrey};
  border-bottom: 0.4rem solid ${Colors.primary};
  z-index: 100;
`;

export const Img = styled.img`
  height: 4rem;
`;

export const Links = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Link = styled(NavLink)<LinkProps>`
  color: ${Colors.primary};
  border-bottom: ${(props) => props.iscurrent && `0.2rem solid ${Colors.primary}`};
`;
