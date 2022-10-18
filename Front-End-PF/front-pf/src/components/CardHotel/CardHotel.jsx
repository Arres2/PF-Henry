import "./CardHotel.css";
export default function CardHotel() {
  return (
    <div>
      <a className="pack">
        <div className="imgPackCardTotal">
          <img
            className="imagenCardPack"
            src="https://www.serargentino.com/public/images/2020/11/16049512330-Crdoba-773x458.jpg"
            alt=""
          />
        </div>
        <div className="infoCity">
          <h1>Cordoba, Arg</h1>
          <p>Fecha de vuelo: </p>
          <p>Hotel: </p>
          <p>
            Excursiones:
            <ul>
              <li></li>
            </ul>
          </p>
        </div>
        <div className="valorPack">
          <h1>$80000</h1>
        </div>
      </a>
    </div>
  );
}
