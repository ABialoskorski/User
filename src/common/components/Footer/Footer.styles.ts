import styled from 'styled-components';
import { Colors } from '../../UI/cssVariables';

export const FooterStyled = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  color: ${Colors.white};
  background-color: ${Colors.grey};
  font-size: 1.4rem;
  padding: 1rem;
`;
