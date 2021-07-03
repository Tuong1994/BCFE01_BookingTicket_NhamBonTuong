import React, { useEffect, useState } from 'react';

function Demo(props) {
    const [min, setMin] = useState(10);
    const [sec, setSec] = useState(0);
    useEffect(() => {
        let Interval = setInterval(() => {
            if (sec > 0) {
                setSec(sec - 1)
            } else if (sec === 0) {
                if (min === 0) {
                    clearInterval(Interval);
                } else {
                    setMin(min - 1);
                    setSec(59)
                }
            }
        }, 1000)
        return () => {
            clearInterval(Interval);
        }
    })

    return (
        <div className="demo">
            <div className="demo__clock">
                <p>{min}:{sec < 10 ? `0${sec}` : sec}</p>
            </div>
        </div>
    );
}

export default Demo;