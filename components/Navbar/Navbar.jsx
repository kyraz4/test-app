import React from 'react';
import {NavLink} from 'react-router-dom'
import FriendsBlockContainer from './FriendsBlock/FriendsBlockContainer';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
grid-area: n;
background-color: #f3e7c9;
padding: 20px;
`;

const NavItemContainer = styled.div`

 a {
  color:#d88c51;
  text-decoration: none; 
  font-size: 25px;
 }

  
 a: hover {
  color: #774023;
}

a:active {
  color: #774023;
}
`;

const Navbar = (props) => {

return <NavBarContainer>

  <NavItemContainer>
  <NavLink to='/profile' >Профиль</NavLink>
  </NavItemContainer>
  <NavItemContainer>
  <NavLink to='/dialogs'>Сообщения</NavLink>
  </NavItemContainer>
  <NavItemContainer>
  <NavLink to='/users'>Пользователи</NavLink>
  </NavItemContainer>
  <NavItemContainer>
  <NavLink to='/news' >Новости</NavLink>
  </NavItemContainer>
  <NavItemContainer>
  <NavLink to='/music'>Музыка</NavLink>
  </NavItemContainer>
  <NavItemContainer>
  <NavLink to='/settings'>Настройки</NavLink>
  </NavItemContainer>
  <FriendsBlockContainer />
  </NavBarContainer>;
}

export default Navbar;