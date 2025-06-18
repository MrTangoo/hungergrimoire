import { useState, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import PlaySvg from '../img/svg/play.svg';
import StopSvg from '../img/svg/square.svg';
import RestartSvg from '../img/svg/restart.svg';

function Chrono({ MinutesCustom = 5 }) { // paramètres pour changer les minutes après, je met 5min pour test
    
    const time = new Date(); // on crée la variable du temps
    time.setSeconds(time.getSeconds() + MinutesCustom * 60) // on convertis les secondes en minutes

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp: time});

    return(
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="bg-dark-grey rounded-full p-4 w-80 flex items-center justify-center">
                <div className="text-2xl text-white items-center mr-20">
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds} {/* opérateur ternaire, si sec < 10 alors ajt 0 devant, par exemple 9 sec -> 09 sec */}
                </div>
                <div className="flex">
                    <button onClick={isRunning ? pause : resume} className="mr-5">
                        <img src={isRunning ? StopSvg : PlaySvg} alt={isRunning ? "Stop" : "Play"} />
                    </button>
                    <button onClick={() => restart(time)}>
                        <img src={RestartSvg} alt="Restart" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chrono;