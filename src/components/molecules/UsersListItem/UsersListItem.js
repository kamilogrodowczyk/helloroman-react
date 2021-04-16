import React, { useContext } from 'react';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { name, attendance, average } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

export default UsersListItem;
