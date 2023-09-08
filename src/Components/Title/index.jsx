import style from "./style.module.css";

export default function Title(props){
    return (
        <h1 className={style.bigTitle}>
            {props.children}
        </h1>
    )
}