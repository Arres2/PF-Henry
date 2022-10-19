import "./UserInfo.css";
export default function UserInfo(name, surname, img) {
  return (
    <div className="info-total">
      <div className="info-text">
        <img
          src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
          className="h-40 w-30"
        ></img>
        <p>Hola, {/* {name} {surname} */}</p>
      </div>
      <div className="li-form">
        <li>Datos personales</li>
        <li>Configuracion de cuenta</li>
      </div>
    </div>
  );
}
