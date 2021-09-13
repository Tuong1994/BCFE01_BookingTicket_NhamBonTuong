import React from 'react';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup-wrapper">
            <div className="popup__inner">
                <div className="popup__item">
                    <button className="btn-close" onClick={() => props.setTrigger(false)}><i class="fa fa-times"></i></button>
                    {props.children}
                </div>
            </div>
        </div>
    ) : "";
}

export default Popup;