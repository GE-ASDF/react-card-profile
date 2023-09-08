import style from "./style.module.css";
import LinkButton from "../LinkButton";
import Title from "../Title";
import ProfileSection from "./ProfileSection";

function HandlerContacts(contact){
    return (
        <ProfileSection className={style.separator}> {contact} </ProfileSection>
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

                <ProfileSection className={style.separator}>
                    {info.bio}
                </ProfileSection>

                {keysContacts.map(key => HandlerContacts(info.contacts[key]))}

                <ProfileSection 
                    className={style.socialMedia}
                    id="links-section"
                    aria-label="Social links"
                    data-test="some value"
                >
                    <LinkButton target="_blank" href={info.social.github.link}>{info.social.github.text}</LinkButton>
                    <LinkButton target="_blank" href={info.social.linkedin.link}>{info.social.linkedin.text}</LinkButton>
                    <LinkButton target="_blank" href={info.social.twitter.link}>{info.social.twitter.text}</LinkButton>
                </ProfileSection>
            </div>
        </>
    )
}