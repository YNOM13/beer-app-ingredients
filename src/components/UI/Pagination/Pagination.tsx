import React from 'react';
import "./Pagiantion.css"

interface IPaginationBeers{
  beerPerPage:number
  totalBeers:number
  paginate:(number:number)=>void
}
const Pagination = ({beerPerPage, totalBeers, paginate}:IPaginationBeers) => {
  const pageNumber = []

  for (let i = 1; i <= Math.ceil(totalBeers/beerPerPage); i++) {
    pageNumber.push(i)
  }

  return (
    <ul className="pagination">
      {pageNumber.map(number=><li className="page-item" key={number} >
        <a href="!#" onClick={()=>paginate(number)} className="page-link">
          {number}
        </a>
      </li>)}
    </ul>
  );
};

export default Pagination;