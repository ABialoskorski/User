import { FC } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Input, Label, DatePicker, ButtonContainer, InputNumber } from '../common/UI/forms.styles';
import { Button, Space } from 'antd';
import { ErrorMessage } from '../common/components/ErrorMessage';
import { dateFormat, requiredField } from '../common/constants';
import { disableFuture } from '../common/utils';
import { UserFormData } from './UserForm.interface';
import * as S from './UserForm.styles';

export const UserForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const onSubmit = () => console.log('submit');

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} id='user-form' aria-labelledby='user-form' noValidate>
      <Space direction='vertical'>
        <div>
          <Label htmlFor='firstName'>First name*</Label>
          <Controller
            control={control}
            name='firstName'
            defaultValue=''
            rules={{ required: true }}
            render={(props) => <Input iserror={errors.firstName} {...{ ...props }} />}
          />
          {errors.firstName && <ErrorMessage message={requiredField} />}
        </div>
        <div>
          <Label htmlFor='lastName'>Last name*</Label>
          <Controller
            control={control}
            name='lastName'
            defaultValue=''
            rules={{ required: true }}
            render={(props) => <Input iserror={errors.lastName} {...{ ...props }} />}
          />
          {errors.lastName && <ErrorMessage message={requiredField} />}
          {console.log(errors)}
        </div>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Controller control={control} name='email' defaultValue='' render={(props) => <Input {...{ ...props }} />} />
        </div>
        <div>
          <Label htmlFor='phone'>Phone</Label>
          <Controller
            control={control}
            name='phone'
            defaultValue=''
            render={(props) => <InputNumber max={999999999} {...{ ...props }} />}
          />
        </div>
        <div>
          <Label htmlFor='birthday'>Birthday</Label>
          <Controller
            control={control}
            name='birthday'
            defaultValue=''
            render={(props) => (
              <DatePicker disabledDate={disableFuture} format={dateFormat} placeholder={dateFormat} {...{ ...props }} />
            )}
          />
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
