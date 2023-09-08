import Card from "./Components/Card/Card";
import style from "./styles/App.module.css";
import ansu from "./assets/ansu.jpg";

export default function App(){
  let info = {
    name:'Anderson Souza',
    avatar: ansu,
    bio:'Desenvolvedor full-stack com ênfase em back-end',
    contacts:{
      github:{link:'https://github.com/GE-ASDF', text:'Github'},
      linkedin:{link:'https://www.linkedin.com/in/anderson-souza-20b732112/', text:'LinkedIn'},
      twitter:{link:'', text:'Twitter'},
      email:'ansu@gmail.com',
      phone:"+5585996968686",
    }
  }
  return (
      <section className={style.container}>
        <Card info={info} />
      </section>
  )
}