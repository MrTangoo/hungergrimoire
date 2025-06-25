import { useTimer } from 'react-timer-hook';
import PlaySvg from '../img/svg/play-small.svg';
import StopSvg from '../img/svg/pause-v2.svg';
import RestartSvg from '../img/svg/restart-small.svg';

function Chrono({ MinutesCustom }) {
  const time = new Date();
  time.setMinutes(time.getMinutes() + MinutesCustom); // Ajoute les minutes au temps actuel

  const {
    seconds,
    minutes,
    hours,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp: time, autoStart: false });

  // Fonction pour formater les nombres en 2 chiffres
  const formatTimeUnit = (unit) => {
    return unit < 10 ? `0${unit}` : unit;
  };

  // Calculer les heures, minutes et secondes
  const displayHours = hours;
  const displayMinutes = minutes % 60;
  const displaySeconds = seconds % 60;

  // si les minutes sont plus grand ou égal à 60, alors le width du chrono augmente
  const isBig = minutes >= 60;

  return (
    <div className="flex justify-center items-center">
        <div className={`bg-dark-grey rounded-full p-2 flex items-center justify-center ${isBig ? 'w-40' : 'w-55'}`}>
        <div className="text-2xl text-white items-center mr-5">
          {formatTimeUnit(displayHours)}:{formatTimeUnit(displayMinutes)}:{formatTimeUnit(displaySeconds)}
        </div>
        <div className="flex">
          <button onClick={isRunning ? pause : resume} className="mr-5">
            <img src={isRunning ? StopSvg : PlaySvg} alt={isRunning ? "Stop" : "Play"} />
          </button>
          <button onClick={() => {
            const newTime = new Date();
            newTime.setMinutes(newTime.getMinutes() + MinutesCustom);
            restart(newTime);
          }}>
            <img src={RestartSvg} alt="Restart" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chrono;
