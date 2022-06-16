import { useFormContext } from 'react-hook-form';
import { UseDateValidation } from './useDateValidation.interface';
import moment from 'moment';

export const useDateValidation: UseDateValidation = () => {
  const { watch, clearErrors, setError } = useFormContext();

  const checkIfDateIsTooOld = (name: string) => {
    clearErrors([`${name}.tooOld`]);
    const date = name ? watch(name) : undefined;
    const IsTooOld = moment.isMoment(date) && date.isBefore('1900-01-01');

    if (IsTooOld) setError(`${name}.tooOld`, { type: 'custom' });

    return !IsTooOld;
  };

  return {
    checkIfDateIsTooOld,
  };
};
