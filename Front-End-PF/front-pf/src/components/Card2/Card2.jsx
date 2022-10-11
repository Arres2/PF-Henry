import s from "../Card/CardCss.css";

function Card2({ name, cost, lore }) {
  return (
    <div className="container-all">
      <div className="container-card-salta">
        <h1>Salta {name}</h1>
        <p>Me voy a la playa{lore} </p>
        <div>
          <h2 className="h2cost">$ 99999 {cost}</h2>
        </div>
      </div>
      <div className="container-card-jujuy">
        <h1>Jujuy {name}</h1>
        <p>Lorem ipsum dolor sit amet.{lore} </p>
        <div>
          <h2 className="h2cost">$ 50000{cost}</h2>
        </div>
      </div>
      <div className="container-card-tucuman">
        <h1>Tucuman {name}</h1>
        <p>Lorem ipsum dolor adipisicing elit. {lore} </p>
        <div>
          <h2 className="h2cost">$ 455555{cost}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card2;
