import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
  const { pages, handlePageClick, page = 1 } = props;
  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel='...'
      breakClassName={'page-item'}
      pageCount={pages}
      onPageChange={handlePageClick}
      containerClassName={'pagination justify-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      activeClassName={'active'}
      forcePage={page - 1}
    />
  );
};

export default Pagination;
