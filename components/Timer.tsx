import styles from "../styles/Timer.module.css"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import {useState} from 'react'
interface Timerprops {
    duration: number
    TimerEnd: () => void
}

export default function Timer(props: Timerprops){
    const [time, setTime] = useState()
    return(
        <div className={styles.timer}>
            <CountdownCircleTimer
                duration={props.duration}
                size={120}
                isPlaying
                onComplete={props.TimerEnd}
                colors={[
                    ['#BCE596', 0.33],
                    ['#F7B801', 0.33],
                    ['#ED827A', 0.33],
                ]}>
                {({ remainingTime }) => remainingTime}
             </CountdownCircleTimer>   
        </div>
    )
}