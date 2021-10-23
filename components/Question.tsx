import questaoModel from "../model/question";
import styles from "../styles/Question.module.css"
import Answer from "./Answer";
import Text from './Text'
import Timer from "./Timer";

const letters = [
    { value: 'A', color: '#F2C866'},
    { value: 'B', color: '#F266BA'},
    { value: 'C', color: '#85D4F2'},
    { value: 'D', color: '#BCE596'},
    { value: 'E', color: '#000080'},
]
interface QuestionProps{
    value: questaoModel,
    TimetoResp?: number
    onResponse: (index: number) => void
    TimerEnd: () => void
}
export default function Question(props: QuestionProps){
    const questao = props.value
    function RenderResp(){
        return(
            questao.respostas.map((resp,i) => {
                return <Answer 
                key={i} 
                value={resp} 
                index={i} 
                color={letters[i].color} 
                letter={letters[i].value} 
                onResponse={props.onResponse}/>
            })
        )
    }
    return (
        <div className={styles.question}>
            <Text texto={questao.enunciado}/>
                <Timer duration={props.TimetoResp ?? 15}
                    TimerEnd={props.TimerEnd}
                />
            {RenderResp()}
        </div>
    )
}