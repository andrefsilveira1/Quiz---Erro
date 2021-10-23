import styles from "../styles/Quiz.module.css"
import questaoModel from "../model/question";
import Question from "./Question"
import Button from "./Button";

interface Quizprops{
    question: questaoModel
    last: boolean
    response: (question: questaoModel) => void
    next: () => void
}
export default function Quiz(props:Quizprops){
    function Resp(index: number){
        if(props.question.NotRespondida){
            props.response(props.question.ResTo(index))
        }
    }
    return(
        <div className={styles.quiz}>
            {props.question ? 
            <Question
                value={props.question}
                TimetoResp={15}
                onResponse={Resp}
                TimerEnd={props.next}
            /> : false}
            <Button 
                onClick={props.next}
                text={props.last ? "Finalizar" : "Próxima"}
            />
        </div>
    )
}