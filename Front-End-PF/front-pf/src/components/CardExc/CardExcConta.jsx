import "./CardExc.css";

export default function CardExcContainer({
  id,
  name,
  info,
  dificultad,
  img,
  fechaI,
  fechaF,
}) {
  return (
    <div className="container-general">
      <div className={id % 2 === 0 ? "container-exc-der" : "container-exc-izq"}>
        <div className="container-text">
          <div className="tittle-exc">
            <h1>{name}</h1>
          </div>
          <div className="DesciptionExc">
            <h5>{info}</h5>
            <p>Fecha de inicioo: {fechaI}</p>
            <p>Fecha de finalizacion: {fechaF}</p>
            <p>Dificultad: {dificultad}</p>
          </div>
        </div>
        <img className="imgExc" src={img} alt="" />
      </div>
    </div>
  );
}
