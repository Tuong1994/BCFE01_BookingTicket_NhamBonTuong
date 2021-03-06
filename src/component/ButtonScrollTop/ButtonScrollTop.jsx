import React from 'react';

function ButtonScrollTop(props) {
    return (
        <div className="button-scroll-top">
            <button className="button-scroll" onClick={() => {
                window.scrollTo(0,0);
            }}>
                <i class="fa fa-angle-double-up"></i>
            </button>
        </div>
    );
}

export default ButtonScrollTop;