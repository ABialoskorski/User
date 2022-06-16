import { createContext, useContext, useState } from 'react';
import { UserContextProviderInterface, UserFormData, UseUser } from './UserContext.interface';
import moment from 'moment';

export const useUser = (): UseUser => {
  const userStorage =
    typeof sessionStorage.getItem('user') === 'string' ? JSON.parse(sessionStorage.getItem('user') as string) : {};

  const sessionUser: UserFormData | {} = Object.values(userStorage).length
    ? {
        ...userStorage,
        birthday: userStorage.birthday ? moment(userStorage.birthday) : null,
      }
    : {};

  const [user, setUser] = useState<UserFormData>(sessionUser as UserFormData);

  return {
    user,
    setUser,
  };
};

const UserContext = createContext<UseUser>({} as UseUser);

export const UserContextProvider = ({ children }: UserContextProviderInterface) => (
  <UserContext.Provider value={useUser()}>{children}</UserContext.Provider>
);

export const useUserContext = (): UseUser => useContext(UserContext);
