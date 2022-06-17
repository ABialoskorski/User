import { useFormContext } from 'react-hook-form';
import { UseDateValidation } from './useDateValidation.interface';
import moment from 'moment';

export const useDateValidation: UseDateValidation = () => {
  const { watch } = useFormContext();

  const checkIfDateIsTooOld = (name: string) => {
    const date = name ? watch(name) : undefined;
    const IsTooOld = moment.isMoment(date) && date.isBefore('1900-01-01');

    return !IsTooOld;
  };

  return {
    checkIfDateIsTooOld,
  };
};
