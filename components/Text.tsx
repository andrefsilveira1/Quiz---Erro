import styles from '../styles/Text.module.css'
interface TextProps{
    texto: string
}
export default function Text(props: TextProps){
    return(
        <div className={styles.enunciado}>
            <span className={styles.texto}>{props.texto}</span>
        </div>
    )
}