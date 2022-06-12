import moment, { Moment } from 'moment';

export const disableFuture = (current: Moment): boolean => {
  return current > moment().endOf('day');
};
