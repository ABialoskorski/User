import { Moment } from 'moment';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface UserFormData {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  birthday?: Moment;
  about?: string;
  avatar?: string;
}

export interface UseUser {
  user: UserFormData;
  setUser: Dispatch<SetStateAction<UserFormData>>;
}

export interface UserContextProviderInterface {
  children: ReactNode
}
