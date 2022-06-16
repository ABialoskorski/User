import { FC } from 'react';
import { Descriptions, Result } from 'antd';
import { useUserContext } from '../UserContext/UserContext';
import { dateFormat } from '../common/constants';
import { Avatar, Description, UserContainer } from './UserProfile.styles';

export const UserProfile: FC = () => {
  const {
    user: { firstName, lastName, email, phone, birthday, about, avatar },
  } = useUserContext();

  return (
    <UserContainer>
      {firstName && lastName ? (
        <>
          <Avatar
            src={avatar ? avatar : 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'}
            alt='user avatar'
          />
          <Descriptions title={`${firstName} ${lastName}`}>
            <Descriptions.Item label='Email'>{email || '-'}</Descriptions.Item>
            <Descriptions.Item label='Phone'>{phone || '-'}</Descriptions.Item>
            <Descriptions.Item label='Birthday'>{birthday ? birthday.format(dateFormat) : '-'}</Descriptions.Item>
          </Descriptions>
          {about && <Description>{about}</Description>}
        </>
      ) : (
        <Result status='404' title='Nothing added yet? not a problem, please add a user' />
      )}
    </UserContainer>
  );
};
