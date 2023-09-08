import style from "./style.module.css";

export default function LinkButton(props){
    return (
        <a className={style.linkButton} href={props.link}>
            {props.children}    
        </a>
    )
}