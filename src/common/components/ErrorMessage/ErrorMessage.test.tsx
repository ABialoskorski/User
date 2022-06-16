import { render, screen } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';
import { Colors } from '../../UI/cssVariables';

const errMsg = 'error message text';

beforeEach(() => {
  render(<ErrorMessage message={errMsg} />);
});

describe('ErrorMessage', () => {
  it('renders ErrorMessage with correct Message', () => {
    const messageWrapper = screen.getByText(errMsg);

    expect(messageWrapper).toBeInTheDocument();
  });

  it('should have red color', () => {
    const messageWrapper = screen.getByText(errMsg);
    const messageContainer = screen.getByTestId('MsgContainer');

    expect(messageContainer).toHaveStyle(`background-color: ${Colors.red}`);
    expect(messageWrapper).toBeInTheDocument();
  });
});
