import React, {useState} from 'react';
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

let Paginator = ({totalItemsCount, pageSize, currentPage, setCurrentPage, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount /  pageSize); 
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
       pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return ( 
    <div>
    { portionNumber > 1 &&
    <button onClick = {() => { setPortionNumber(portionNumber - 1)}}>Назад</button>
    }
      {pages
      .filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
      .map( el => {
      return  <SelectedNumber onClick = {() => setCurrentPage(el)}
      el = {el} currentPage = {currentPage} >{el}</SelectedNumber>
      })
      } 
        { portionCount > portionNumber &&
    <button onClick = {() => { setPortionNumber(portionNumber + 1)}}>Вперед</button>
    }     
        </div>);
}

export default Paginator;