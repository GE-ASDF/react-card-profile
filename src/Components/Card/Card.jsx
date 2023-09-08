import style from "./style.module.css";
import LinkButton from "../LinkButton/LinkButton";

export default function Card({info}){
    return (
        <>
            <div className={style.card}>
                <div className={style.cardImage}>
                    <img src={info.avatar} alt="Imagem do perfil" />
                    <h1 className={style.bigTitle}>{info.name}</h1>
                </div>
                <div className={`${style.bio} ${style.separator}`}>
                    {info.bio}
                </div>
                <div className={`${style.separator}`}>
                    {info.contacts.phone}
                </div>
                <div className={`${style.separator}`}>
                    {info.contacts.email}
                </div>
                <div className={style.socialMedia}>
                    <LinkButton link={info.contacts.github.link} text={info.contacts.github.text}/>
                    <LinkButton link={info.contacts.linkedin.link} text={info.contacts.linkedin.text}/>
                    <LinkButton link={info.contacts.twitter.link} text={info.contacts.twitter.text}/>
                </div>
            </div>
        </>
    )
}