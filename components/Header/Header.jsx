import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const HeaderBlock =  styled.header`
  grid-area: h;
  background-color: #774023;
`;

const LoginBlock = styled.div`
  display: flex;
  justify-content: flex-start;

 a {
   color: #f3e7c9;
 }

 div {
color: #f3e7c9;
padding-top: 10px;
margin-left: 10px;
 }
`;

const LogoutButton = styled.button`
padding: 0;
margin-left: 10px;
background-color: #d88c51;
height: 30px;
width: 60px;
border-radius: 20px;
color: #f3e7c9;
font-size: 15px;
border: solid #f3e7c9 1px;
`;

const Header = (props) => {
    return (
    <HeaderBlock>
      <LoginBlock>
      {props.isAuth ?   <div>{props.login}<LogoutButton onClick = {props.logout}>Выйти</LogoutButton> </div> : 
        <NavLink to='login/'>Войти</NavLink>}
      </LoginBlock>
    </HeaderBlock>);
}

export default Header;