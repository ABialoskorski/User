import { FC } from 'react';
import { ErrorMessageDiv, ExclamationCircle, MessageWrapper } from './ErrorMessage.styles';
import { ErrorMessageProps } from './ErrorMessage.interface';

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <ErrorMessageDiv data-testid='MsgContainer'>
      <ExclamationCircle />
      <MessageWrapper>{message}</MessageWrapper>
    </ErrorMessageDiv>
  );
};
