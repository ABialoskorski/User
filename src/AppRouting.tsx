import { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserProfile } from './UserProfile/UserProfile';
import { UserForm } from './UserForm/UserForm';
import { FormProvider, useForm } from 'react-hook-form';
import { UserContextProvider } from './UserContext/UserContext';

export enum Routes {
  USER_PROFILE = 'user-profile',
  USER_FORM = 'user-form',
}

export const AppRouting: FC = () => {
  const methods = useForm({ mode: 'onSubmit' });

  return (
    <>
      <UserContextProvider>
        <Route exact path={`/${Routes.USER_PROFILE}`} component={UserProfile} />
        <FormProvider {...methods}>
          <Route exact path={`/${Routes.USER_FORM}`} component={UserForm} />
        </FormProvider>
      </UserContextProvider>
      <Redirect to={`/${Routes.USER_PROFILE}`} />
    </>
  );
};
