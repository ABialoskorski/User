import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Controller, useFormContext } from 'react-hook-form';
import { Button, Space } from 'antd';
import { ButtonContainer, DatePicker, Input, InputNumber, Label } from '../common/UI/forms.styles';
import { ErrorMessage } from '../common/components/ErrorMessage/ErrorMessage';
import { dateFormat, ErrorMessages } from '../common/constants';
import { disableFuture, fieldFormatting } from '../common/utils';
import { useDateValidation } from './useDateValidation';
import { useUserContext } from '../UserContext/UserContext';
import { UserFormData } from '../UserContext/UserContext.interface';
import { Routes } from '../AppRouting';
import * as S from './UserForm.styles';

export const UserForm: FC = () => {
  const history = useHistory();
  const {
    handleSubmit,
    control,
    watch,
    errors,
    formState: { isDirty },
  } = useFormContext();

  const {
    setUser,
    user: { firstName, lastName, email, phone, birthday, about, avatar },
  } = useUserContext();

  const { checkIfDateIsTooOld } = useDateValidation();

  const onSubmit = (data: UserFormData) => {
    setUser(data);
    sessionStorage.setItem('user', JSON.stringify(data));
    history.push(`/${Routes.USER_PROFILE}`);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} id='user-form' aria-labelledby='user-form' noValidate>
      <Space direction='vertical'>
        <div>
          <Label htmlFor='firstName'>First name*</Label>
          <Controller
            control={control}
            name='firstName'
            defaultValue={firstName}
            rules={{ required: true }}
            render={(props) => <Input iserror={errors.firstName} {...{ ...props }} />}
          />
          {errors.firstName && <ErrorMessage message={ErrorMessages.REQUIRED_FIELD} />}
        </div>
        <div>
          <Label htmlFor='lastName'>Last name*</Label>
          <Controller
            control={control}
            name='lastName'
            defaultValue={lastName}
            rules={{ required: true }}
            render={(props) => <Input iserror={errors.lastName} {...{ ...props }} />}
          />
          {errors.lastName && <ErrorMessage message={ErrorMessages.REQUIRED_FIELD} />}
        </div>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Controller
            control={control}
            name='email'
            defaultValue={email}
            rules={{ pattern: fieldFormatting.EMAIL }}
            render={(props) => <Input iserror={errors.email} {...{ ...props }} />}
          />
          {errors.email && <ErrorMessage message={ErrorMessages.EMAIL_FORMAT} />}
        </div>
        <div>
          <Label htmlFor='phone'>Phone</Label>
          <Controller
            control={control}
            name='phone'
            defaultValue={phone}
            render={(props) => <InputNumber max={999999999} {...{ ...props }} />}
          />
        </div>
        <div>
          <Label htmlFor='birthday'>Birthday</Label>
          <Controller
            control={control}
            name='birthday'
            defaultValue={birthday}
            rules={{ validate: () => checkIfDateIsTooOld('birthday') }}
            render={(props) => (
              <DatePicker disabledDate={disableFuture} format={dateFormat} placeholder={dateFormat} {...{ ...props }} />
            )}
          />
          {errors.birthday && <ErrorMessage message={ErrorMessages.TOO_OLD} />}
        </div>
        <div>
          <Label htmlFor='about'>About</Label>
          <Controller
            control={control}
            name='about'
            defaultValue={about}
            render={(props) => (
              <Input.TextArea
                rows={4}
                maxLength={200}
                showCount
                autoSize={{ minRows: 3, maxRows: 6 }}
                {...{ ...props }}
              />
            )}
          />
        </div>
        <div>
          <Label htmlFor='avatar'>Avatar URL</Label>
          <Controller
            control={control}
            name='avatar'
            defaultValue={avatar}
            render={(props) => <Input {...{ ...props }} />}
          />
          {isDirty && !watch('avatar') && <S.P>consider adding also a cool avatar :)</S.P>}
        </div>
        <ButtonContainer>
          <Button type='primary' htmlType='submit'>
            Save
          </Button>
        </ButtonContainer>
      </Space>
    </S.Form>
  );
};
