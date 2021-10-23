import AnswerModel from "../model/answer";
import styles from '../styles/Answer.module.css'
interface Answerprops{
    value: AnswerModel
    index: number
    letter: string
    color: string
    onResponse: (index: number) => void
}
export default function Answer(props: Answerprops){
    const resp = props.value
    return(
        <div className={styles.full} onClick={() => props.onResponse(props.index)}>
            <div className={styles.resp}>
                <div className={styles.content}>
                    {!resp.revelado ? (
                        <div className={styles.front}>
                        <div className={styles.letter} style={{backgroundColor: props.color}}>
                            {props.letter}
                        </div>
                        <div className={styles.value}>
                            {resp.value}
                        </div>
                    </div>
                    ): (
                        <div className={styles.back}>
                            {resp.certa ? (
                                <div className={styles.CorrecBack}>
                                    <div>A resposta correta é:</div>
                                    <div className={styles.text}>{resp.value}</div>
                                </div>
                            ):(
                                <div className={styles.WrongBack}>
                                    <div>A resposta está errada</div>
                                    <div className={styles.text}>{resp.value}</div>
                                </div>
                            )}
                    </div>
                    )}
                </div>  
            </div>
        </div>
    )
}