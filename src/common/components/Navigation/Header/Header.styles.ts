import styled from 'styled-components';
import { Colors } from '../../../UI/cssConstants';

export const Nav = styled.nav`
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  height: 6rem;
  padding: 2rem;
  align-items: center;
  background-color: ${Colors.LIGHTGREY};
  border-bottom: 0.4rem solid ${Colors.PRIMARY};
  z-index: 100;
`;

export const Img = styled.img`
  height: 4rem;
`;

export const Paragraph = styled.p`
  color: ${Colors.PRIMARY};
  border-bottom: 0.2rem solid ${Colors.PRIMARY};
`;
