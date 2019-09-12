import React from 'react';
import FriendIcon from './FriendIcon/FriendIcon';
import styled from 'styled-components';

const FriendsBlockContsiner = styled.div`
  color:#d88c51;
  font-family: Arial;
  font-size: 25px;
`;

const FriendsHeader =  styled.h3`
   color: #774023;
   font-family: Arial;
`;

const FriendsBlock = (props) => {
return (
  <FriendsBlockContsiner>
    <FriendsHeader>
    Друзья
    </FriendsHeader>
          <div >
        {props.data.map(el => <FriendIcon key={el.id} name={el.name}/>)}
        </div>
  </FriendsBlockContsiner>
);
}

export default FriendsBlock;