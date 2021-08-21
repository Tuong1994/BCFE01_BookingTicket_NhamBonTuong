import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

function Popup(props) {
    let popupRef = useRef();
    useEffect(() => {
        let handleClickOutside = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                props.setTrigger(false);
                console.log("setTriger");
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }
    })
    return (props.trigger) ? (
        <div className="popup-wrapper" ref={popupRef}>
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