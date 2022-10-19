import React from "react";
import s from "./CardInformation.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CardInformation({ img, name, country }) {

  const data = useSelector((state) => state.activitiesCountry)
  console.log("esta es la data")
  console.log(data[0])


  return (
    <div className={s.mainContainer}>
      <div className={s.container}>
        <div className={s.infoContainer}>
          <div className={s.loreContainer}>
            <div className={s.lore}>
              <p>
                Descubre Todas Las Actividades que Tenemos en {`${country}`}
              </p>
            </div>
            <div className={s.elseContainer}>
              <div id={s.act} className={s.actContainer}>
                <h2> Hac Click en la Tarjeta par ver el Pack Disponible </h2>
                {data.length > 0? 
                data.map(elm => {
                  return (
                    <div className={s.actsContainer}>                  
                    <div className={s.acts}>
                    <Link key={elm.id} to={`/packages/${elm.id}`}>
                      <p>{elm?.city}</p>
                      </Link>
                      <img src={elm?.pictures[0].url} />
                      <div id={s.actLorem}>
                        <p>
                          {elm?.name}
                        </p>
                      </div>
                    </div>                 
                  </div>

                  )
                })
  : console.log ("No hay Datos")}
                <Link to="/excursiones">Ver Todos las Actividades</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
