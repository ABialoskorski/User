import { createContext, useContext, useState } from 'react';
import { UserContextProviderInterface, UserFormData, UseUser } from './UserContext.interface';

export const useUser = (): UseUser => {
  const [user, setUser] = useState<UserFormData>({} as UserFormData);

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
