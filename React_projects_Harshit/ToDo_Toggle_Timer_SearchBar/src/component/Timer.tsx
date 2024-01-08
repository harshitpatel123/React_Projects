import React, { useState, useEffect } from 'react';

interface HandleSetTimerProps {
    nowtime1: string;
}

function HandleSetTimer({ nowtime1 }: HandleSetTimerProps): JSX.Element {
    const timervalue: number = Number(nowtime1);
    const [remaintime, setremaintime] = useState<number>(timervalue);

    useEffect(() => {
        const interval = setInterval(() => {
            setremaintime((prevTime) => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(interval); 
                    return 0;
                }
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [timervalue]);

    return <h1>Remaining Time : {remaintime}</h1>;
}

export default function Timer(): JSX.Element {
    const [nowtime, setnowtime] = useState<string>('');
    const [testbool, settestbool] = useState<boolean>(false);
    const [btntext, setbtntext] = useState<string>('Start Timer');

    function HandleStartTime(): void {
        if (!testbool) {
            settestbool(true);
            setbtntext('Stop');
        } else {
            settestbool(false);
            setbtntext('Start Timer');
        }
    }

    return (
        <div>
            <h1>Timer</h1>
            <input
                value={nowtime}
                onChange={(e) => setnowtime(e.target.value)}
                placeholder="Enter Time"
                type="number"
            />
            <button onClick={HandleStartTime}>{btntext}</button>
            <br />
            <br />
            {testbool && <HandleSetTimer nowtime1={nowtime} />}
        </div>
    );
}
