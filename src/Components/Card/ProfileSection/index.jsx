import style from "./style.module.css";

export default function ProfileSection(props){
    return (
        <div className={style.wrapper}>
            {props.children}
        </div>
    )
}