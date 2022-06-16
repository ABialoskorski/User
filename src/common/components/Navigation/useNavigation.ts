import { HeaderLink, UseNavigation } from './useNavigation.interface';
import { Routes } from '../../../AppRouting';
import { useUserContext } from '../../../UserContext/UserContext';

export const useNavigation: UseNavigation = () => {
  const { user } = useUserContext();
  const userExist: boolean = Object.values(user).length > 0;

  const headerLinks: HeaderLink[] = [
    { route: Routes.USER_PROFILE, title: 'User Info' },
    { route: Routes.USER_FORM, title: userExist ? 'Edit User' : 'Add User' },
  ];

  return {
    headerLinks,
  };
};
