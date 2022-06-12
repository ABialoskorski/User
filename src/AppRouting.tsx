import { FC } from 'react';
import { Route } from 'react-router-dom';
import { UserProfile } from './UserProfile/UserProfile';
import { UserForm } from './UserForm/UserForm';

enum Routes {
  USER_PROFILE = '',
  USER_FORM = 'user-form',
}

export const AppRouting: FC = () => (
  <>
    <Route exact path={`/${Routes.USER_PROFILE}`} component={UserForm} />
    <Route exact path={`/${Routes.USER_FORM}`} component={UserForm} />
  </>
);
