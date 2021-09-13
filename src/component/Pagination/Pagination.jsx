import React from 'react';
import { useState } from 'react';

function Pagination({ perPage, total, changePage }) {
    const [currentBtn, setCurrentBtn] = useState("");
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div className="pagination">
            <ul className="pagination__list">
                {pageNumber?.map((page, index) => {
                    return <li key={index} className={currentBtn == index ? "list__item active-btn" : "list__item"}>
                        <button type="button" className="item__btn" onClick={() => {
                            changePage(page);
                            setCurrentBtn(index);
                        }}>
                            {page}
                        </button>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Pagination;