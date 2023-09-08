import style from "./style.module.css";
import LinkButton from "../LinkButton";
import Title from "../Title";
import ProfileSection from "./ProfileSection";

function HandlerContacts(contact){
    return (
        <ProfileSection> {contact} </ProfileSection>
    )
}

export default function Card({info}){
    let keysContacts = Object.keys(info.contacts);

    return (
        <>
            <div className={style.card}>
                <div className={style.cardImage}>
                    <img src={info.avatar} alt="Imagem do perfil" />
                    <Title>
                        {info.name}
                    </Title>
                </div>

                <ProfileSection >
                    {info.bio}
                </ProfileSection>

                {keysContacts.map(key => HandlerContacts(info.contacts[key]))}
                <ProfileSection>
                    <div className={style.socialMedia}>
                        <LinkButton link={info.social.github.link}>{info.social.github.text}</LinkButton>
                        <LinkButton link={info.social.linkedin.link}>{info.social.linkedin.text}</LinkButton>
                        <LinkButton link={info.social.twitter.link}>{info.social.twitter.text}</LinkButton>
                    </div>
                </ProfileSection>
            </div>
        </>
    )
}