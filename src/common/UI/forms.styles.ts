import styled, { css } from 'styled-components';
import { DatePicker as DatepickerAnt, Input as InputAnt, InputNumber as InputNumberAnt } from 'antd';
import { Colors, FontSize, lineHeight } from './cssConstants';

interface ErrorLabelProps {
  iserror?: boolean;
}

export const defaultText = css`
  font-size: ${FontSize.REGULAR};
  line-height: ${lineHeight};
  font-weight: 400;
`;

export const Input = styled(InputAnt)<ErrorLabelProps>`
  ${defaultText};

  border-color: ${(props) => props.iserror && Colors.RED};
  &:hover {
    border-color: ${(props) => props.iserror && Colors.RED};
  }
  margin-bottom: ${(props) => (props.iserror ? '0' : '0.8rem')};
`;

export const InputNumber = styled(InputNumberAnt)<ErrorLabelProps>`
  ${defaultText};

  border-color: ${(props) => props.iserror && Colors.RED};
  &:hover {
    border-color: ${(props) => props.iserror && Colors.RED};
  }
  margin-bottom: ${(props) => (props.iserror ? '0' : '0.8rem')};
  &.ant-input-number {
    width: 100%;
    height: 3.7rem;
  }
`;

export const DatePicker = styled(DatepickerAnt)<ErrorLabelProps>`
  input {
    ${defaultText};
  }
  &.ant-picker {
    display: flex;
  }
  border-color: ${(props) => props.iserror && Colors.RED};
  &:hover {
    border-color: ${(props) => props.iserror && Colors.RED};
  }
`;

export const Label = styled.label`
  ${defaultText};
  display: flex;
  font-size: ${FontSize.REGULAR};
  align-items: center;
  margin-bottom: 0.4rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;
