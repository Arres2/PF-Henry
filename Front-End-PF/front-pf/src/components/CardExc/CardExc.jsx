import "./CardExc.css";
import CardExcContainer from "./CardExcConta";
export default function CardExcursion({ excursionesInfo }) {
  return (
    <div className="container-general">
      {excursionesInfo &&
        excursionesInfo?.map((e) => (
          <CardExcContainer
            key={e.id}
            name={e.name}
            info={e.info}
            dificultad={e.dificultad}
            img={e.img}
            fechaI={e.DiaI}
            fechaF={e.DiaF}
          />
        ))}
    </div>
  );
}
