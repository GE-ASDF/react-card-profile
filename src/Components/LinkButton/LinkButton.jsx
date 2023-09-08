import style from "./style.module.css";

export default function LinkButton({link, text}){
    return (
        <a className={style.linkButton} href={link}>{text}</a>
    )
}