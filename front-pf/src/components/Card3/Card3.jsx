import "../Card/CardCss.css";

function Card({ name, cost, lore }) {
  return (
    <div className="container-all">
      <div className="container-card-lagos">
        <h1>San Martin {name}</h1>
        <p>Lorem ipsum dolor sitng elit.{lore} </p>
        <div>
          <h2 className="h2cost">$ 1212121 {cost}</h2>
        </div>
      </div>
      <div className="container-card-bariloche">
        <h1>Bariloche {name}</h1>
        <p>Lorem ipsum dolor sit amet.{lore} </p>
        <div>
          <h2 className="h2cost">$ 50000{cost}</h2>
        </div>
      </div>
      <div className="container-card-langostura">
        <h1>Langostura {name}</h1>
        <p>Lorem ipsum dolor adipisicing elit. {lore} </p>
        <div>
          <h2 className="h2cost">$ 455555{cost}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
