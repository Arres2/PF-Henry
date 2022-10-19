import UserInfo from "../CardUserInfo/UserInfo";
import "./Forms.css";
export default function Forms() {
  return (
    <div className="container-all-forms">
      <div>
        <UserInfo />
      </div>
      <div className="container-forms">
        <form className="forms">
          <div className="h1form">
            <h1>Datos personaless</h1>
          </div>
          <div className="container-all-input">
            <div className="container-input-row">
              <div className="div-1">
                <label className="text">Nombre</label>
                <input type="text" id="NombreUser" />
              </div>
              <div className="div-1">
                <label className="text">Apellido</label>
                <input type="text" id="ApellidoUser" />
              </div>
            </div>
            <div className="container-input-row">
              <div className="div-1">
                <label className="text">Fecha de nacimiento</label>
                <input type="date" id="FechaNac" />
              </div>
              <div className="div-1">
                <label className="text">DNI</label>
                <input type="number" id="DNI" />
              </div>
            </div>

            <div className="container-input-row">
              <div className="div-1">
                <label className="text">Pasaporte</label>
                <input type="number" id="FechaNac" />
              </div>
              <div className="div-1">
                <label className="text">Celular</label>
                <input type="number" id="DNI" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
