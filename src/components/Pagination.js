import React from 'react'

const Pagination = ({postsPerPage,totalPosts,paginate}) => {
const pageNumbers = [];

for (let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i);
}

  return (
   <nav className="pagination navbar navbar-light bg-light  d-flex justify-content-center text-primary">
       {pageNumbers.map(number =>(
           <li key={number} className="page-item">
               <a onClick={()=>paginate(number)}    className="page-link">
                   {number}
               </a>
           </li>
       ))}
   </nav>
  )
}

export default Pagination;