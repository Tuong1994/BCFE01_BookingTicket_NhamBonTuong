import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

function CountDown(props) {
    const [min, setMin] = useState(5);
    const [sec, setSec] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => {
            if (sec > 0) {
                setSec(sec - 1);
            } else if (sec === 0) {
                if (min === 0) {
                    clearInterval(interval);
                    Swal.fire({
                        icon: "warning",
                        title: "Bạn đã hết thời gian đặt vé",
                    });
                } else {
                    setMin(min - 1);
                    setSec(59)
                }
            }
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <div className="countdown">
            <p>{min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}</p>
        </div>
    );
}

export default CountDown;