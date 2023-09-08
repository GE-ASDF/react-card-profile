import Card from "./Components/Card";
import style from "./styles/App.module.css";
import ansu from "./assets/profile.avif";

export default function App(){
  let info = {
    name:'Anderson Souza',
    avatar: ansu,
    bio:'Desenvolvedor full-stack com ênfase em back-end',
    contacts:{
      email:'ansu@gmail.com',
      phone:"+5585996968686",
    },
    social:{
      github:{link:'https://github.com/GE-ASDF', text:'Github'},
      linkedin:{link:'https://www.linkedin.com/in/anderson-souza-20b732112/', text:'LinkedIn'},
      twitter:{link:'', text:'Twitter'},
    }
  }
  return (
      <section className={style.container}>
        <Card info={info} />
      </section>
  )
}