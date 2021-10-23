import styles from "../styles/Button.module.css"
import Link from 'next/link'
interface ButtonProps {
    href?: string
    text: string
    onClick?: (e: any) => void 
}

export default function Button(props: ButtonProps){
    function RenderButton(){
        return(
        <button className={styles.botao} 
            onClick={props.onClick}>
            {props.text}
        </button>
        )
    }
    return props.href ? (
        <Link href={props.href}>
            <button className={styles.botao} 
            onClick={props.onClick}>
                {props.text}
            </button>
        </Link>
    ) : (
        RenderButton()
    )
}