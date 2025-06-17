import { useState, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import PlaySvg from '../img/svg/play.svg';
import StopSvg from '../img/svg/square.svg';

function Chrono({ MinutesCustom = 5 }) { // paramètres pour changer les minutes après, je met 5min pour test
    
    return(
        <div className="bg-light-green h-500px flex flex-col items-center justify-center">
            <div>
                <p>test</p>
            </div>
        </div>
    );
}

export default Chrono;