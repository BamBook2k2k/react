import React from 'react'
import { getPageArray } from '../../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {

    //сделать надо через юз мемо что бы не отрисовывало каждый раз
    let pagesArray = getPageArray (totalPages);

    return (
        <div className="page__wrapper">
        {pagesArray.map(p =>
            <span 
                onClick = {() => changePage (p)}
                key = {p} 
                className={page === p ? 'page page__current' : 'page'}
            >
            {p}
            </span>
        )}
        </div>
    )
}

export default Pagination;