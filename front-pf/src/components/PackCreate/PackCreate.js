import React from "react";
import s from "./PackCreate.module.css";
import { useState } from "react";

export default function PackCreate() {
  // Simbolisa la data del backend
  const [actividades] = useState([
    { name: "Montañismo" },
    { name: "Senderismo" },
    { name: "Rafting" },
  ]);

  const [comida] = useState([
    { name: "Desayuno" },
    { name: "Almuerzo" },
    { name: "Cena" },
  ]);

  const [actCheckboxStates, setActCheckboxStates] = useState({
    Montañismo: false,
    Senderismo: false,
    Rafting: false,
  });

  const [comCheckboxState, setComCheckboxState] = useState({
    Desayuno: false,
    Almuerzo: false,
    Cena: false,
  });

  const [input, setInput] = useState({
    pais: "",
    destino: "",
    hotel: "",
    actividades: [],
    comida: [],
    integrantes: "",
    semanas: "",
  });

  // Guarda en el input los generos y plataformas
  const handleButtonClick = (e) => {
    setActCheckboxStates({
      ...actCheckboxStates,
      [e.target.value]: !actCheckboxStates[e.target.value],
    });
    setComCheckboxState({
      ...comCheckboxState,
      [e.target.value]: !actCheckboxStates[e.target.value],
    });
    if (!actCheckboxStates[e.target.value]) {
      input[e.target.name].push(e.target.value);
    } else {
      input[e.target.name] = input[e.target.name].filter(
        (el) => el !== e.target.value
      );
    }
  };

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  console.log(input);

  return (
    <div className={s.mainContainer}>
      <div className={s.container}>
        <div className={s.packContainer}>
          <div className={s.pack}>
            <div className={s.paisDestino}>
              <h1>{input.pais ? input.pais : "Pais..."}</h1>
              <h2>{input.destino ? input.destino : "Destino..."}</h2>
            </div>
            <div className={s.hotel}>
              <h5>Hotel: </h5>
              <p>{input.hotel ? input.hotel : "Hotel..."}</p>
            </div>
            <div className={s.check}>
              <div className={s.acts}>
                <p>Actividades</p>
                <div className={s.checkTxt}>
                  <h2>{actCheckboxStates.Montañismo && "● Montañismo"}</h2>
                  <h2>{actCheckboxStates.Senderismo && "● Senderismo"}</h2>
                  <h2>{actCheckboxStates.Rafting && "● Rafting"}</h2>
                </div>
              </div>
              <div className={s.acts}>
                <p>Comidas Incluidas</p>
                <div className={s.checkTxt}>
                  <h2>{comCheckboxState.Desayuno && "● Desayuno"}</h2>
                  <h2>{comCheckboxState.Almuerzo && "● Almuerzo"}</h2>
                  <h2>{comCheckboxState.Cena && "● Cena"}</h2>
                </div>
              </div>
            </div>
            <div className={s.tiempo}>
              <h5>Integrantes :</h5>
              <p>{input.integrantes ? input.integrantes : "Integrantes..."}</p>
            </div>
            <div className={s.tiempo}>
              <h5>Semanas :</h5>
              <p>{input.semanas ? input.semanas : "Semanas..."}</p>
            </div>
            <div className={s.precio}>
              <h3>Precio</h3>
            </div>
          </div>
        </div>
        <div className={s.formContainer}>
          <form className={s.form}>
            <div className={s.select}>
              <label>Elige un Pais :</label>
              <select
                onChange={handleInputChange}
                name="pais"
                defaultValue="default"
              >
                <option value="default" disabled>
                  Pais...
                </option>
                <option>Argentina</option>
                <option>Cuba</option>
                <option>Venezuela</option>
              </select>
            </div>
            <div className={s.select}>
              <label>Elige un Destino :</label>
              <select
                onChange={handleInputChange}
                name="destino"
                defaultValue="default"
              >
                <option value="default" disabled>
                  Destino...
                </option>
                <option>Buenos Aires</option>
                <option>Cordoba</option>
                <option>Mendoza</option>
              </select>
            </div>
            <div className={s.select}>
              <label>Elige un Hotel :</label>
              <select
                onChange={handleInputChange}
                name="hotel"
                defaultValue="default"
              >
                <option value="default" disabled>
                  Hotel...
                </option>
                <option>Hotel San Bernardo</option>
                <option>Hotel Hilton</option>
                <option>Hotel Don Patricio</option>
              </select>
            </div>
            <div className={s.select}>
              <label>Elige tus Actividades :</label>
              <div className={s.actividades}>
                {actividades.map((act, index) => {
                  return (
                    <div key={index} className={s.checkbox}>
                      <input
                        type="checkbox"
                        value={act.name}
                        name="actividades"
                        onChange={handleButtonClick}
                      />
                      <label>{act.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={s.select}>
              <label>Elige tus Comidas Incluidas :</label>
              <div className={s.actividades}>
                {comida.map((com, index) => {
                  return (
                    <div key={index} className={s.checkbox}>
                      <input
                        type="checkbox"
                        value={com.name}
                        name="comida"
                        onChange={handleButtonClick}
                      />
                      <label>{com.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={s.select}>
              <label>Elige Cantidad de Integrantes :</label>
              <select
                onChange={handleInputChange}
                name="integrantes"
                defaultValue="default"
              >
                <option value="default" disabled>
                  Integrantes...
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
            <div className={s.select}>
              <label>Elige Cantidad de Semanas :</label>
              <select
                onChange={handleInputChange}
                name="semanas"
                defaultValue="default"
              >
                <option value="default" disabled>
                  Semanas...
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
