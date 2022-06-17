import styled from 'styled-components';
import { ExclamationCircleFilled as ExclamationCircleFilledAnt } from '@ant-design/icons';
import { Colors, FontSize } from '../../UI/cssConstants';

export const ErrorMessageDiv = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.WHITE};
  background-color: ${Colors.RED};
  border-radius: 0.4rem;
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 0.1rem;
  font-size: ${FontSize.REGULAR};
`;

export const ExclamationCircle = styled(ExclamationCircleFilledAnt)`
  font-size: ${FontSize.REGULAR};
  margin-right: 1rem;
`;

export const MessageWrapper = styled.p`
  display: flex;
  width: 100%;
`;
