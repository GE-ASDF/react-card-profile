import style from "./style.module.css";

export default function LinkButton(props){
    return (
        <a {...props} className={style.linkButton}>
            {props.children}    
        </a>
    )
}