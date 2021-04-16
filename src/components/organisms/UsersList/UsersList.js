import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Title } from 'components/atoms/Title/Title';
import { StyledList } from './UsersList.styles';
import { UserShape } from 'types';
import PropTypes from 'prop-types';

const UsersList = ({ users }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
