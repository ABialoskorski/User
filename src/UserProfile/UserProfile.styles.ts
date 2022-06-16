import styled from 'styled-components';
import { Colors } from '../common/UI/cssVariables';

export const UserContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 80%;
  margin: auto;
`;

export const Avatar = styled.img`
  height: 32rem;
  width: 32rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 500px) {
    height: 24rem;
    width: 24rem;
  }
`;

export const Description = styled.span`
  font-size: 1.4rem;
  border: 0.1rem dotted ${Colors.primary};
  padding: 1rem;
  word-break: break-word;
`;
