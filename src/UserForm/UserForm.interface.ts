import { Moment } from 'moment';

export interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthday: Moment
}
