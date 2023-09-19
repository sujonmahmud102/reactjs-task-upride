import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];


    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className='my-5'>
            <ul className="pagination flex gap-5 ">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        onClick={() => onPageChange(number)}
                        className={`page-item border bg-pink-400 hover:bg-pink-200 px-3 rounded-lg cursor-pointer ${currentPage === number ? "text-white font-bold" : ""}`}>
                        <button className={`page-link ${currentPage === number ? 'active' : ''}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;