import React from 'react';
import styled from 'styled-components';

const SelectedNumber = styled.span`
:hover {
    background-color: #d88c51;
}

color: #774023;
font-size: 20px;
background-color: #f3e7c9;
height: 30px;
width: 30px;
border-radius: 3px;
margin-left: 5px;

 ${props =>  props.currentPage === props.el && `font-weight: bold;` }
`;

let Paginator = ({totalUserCount, pageSize, currentPage, setCurrentPage }) => {
    let pagesCount = Math.ceil(totalUserCount /  pageSize); 
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
       pages.push(i);
    }

    return ( 
    <div>
      {pages.map( el => {
      return  <SelectedNumber onClick = {() => setCurrentPage(el)}
      el = {el} currentPage = {currentPage} >{el}</SelectedNumber>
      })
      }      
        </div>);
}

export default Paginator;