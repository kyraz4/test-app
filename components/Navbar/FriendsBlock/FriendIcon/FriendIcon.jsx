import React from 'react';
import styled from 'styled-components';

const FriendIconBlock = styled.div`
   height: 40px;
   width: 40px;
   border-radius: 50%;
   background-color: #774023;
`;

const FriendIcon = (props) => {
return  <div>
   <FriendIconBlock></FriendIconBlock>
   <p>{props.name}</p>
</div>;       
}

export default FriendIcon;