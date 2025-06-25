import { useState, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import PlaySvg from '../img/svg/play-small.svg';
import StopSvg from '../img/svg/pause-v2.svg';
import RestartSvg from '../img/svg/restart-small.svg';

// Import Composant Chrono dans autres fichier (changer le 5 par les minutes correspondantes à la recette) :
// Code : <Chrono MinutesCustom={5} />


function Chrono({ MinutesCustom }) { // paramètres pour changer les minutes après, je met 5min pour test

    const time = new Date(); // on crée la variable du temps
    time.setSeconds(time.getSeconds() + MinutesCustom * 60) // on convertis les secondes en minutes

    const {
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp: time, autoStart: false});

    // on calcule les heures à partir des mins
    const displayHours = hours > 0 ? hours : Math.floor(minutes / 60);
    const displayMinutes = minutes % 60;
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="flex justify-center items-center">
            <div className="bg-dark-grey rounded-full p-2 w-40 flex items-center justify-center">
                <div className="text-2xl text-white items-center mr-5">
                    {displayHours > 0 ? `${displayHours}:` : ''}
                    {displayMinutes}:{displaySeconds}
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