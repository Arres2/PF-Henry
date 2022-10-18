import s from "../Card/CardCss.css";


function Card2(data) {
  console.log("los datos")

  console.log(data)
  console.log(data.name[0]?.id)



  return (
    <div className="container-all">
      {data? 
      <>
      <div className="container-card-salta" style={{backgroundImage:`url(${data.name[0]?.pictures[1]?.url})`}}>
        <h1> {data.name[0]?.city}</h1>
        <p>  {data.name[0]?.name} </p>
        <div>
          <h2 className="h2cost">${data.name[0]?.cost}</h2>
        </div>
      </div>
      <div className="container-card-salta" style={{backgroundImage:`url(${data.name[1]?.pictures[1]?.url})`}}>
        <h1> {data.name[1]?.city}</h1>
        <p>  {data.name[1]?.name} </p>
        <div>
          <h2 className="h2cost">${data.name[1]?.cost}</h2>
        </div>
      </div>
      <div className="container-card-salta" style={{backgroundImage:`url(${data.name[2]?.pictures[1]?.url})`}}>
        <h1> {data.name[2]?.city}</h1>
        <p>  {data.name[2]?.name} </p>
        <div>
          <h2 className="h2cost">${data.name[2]?.cost}</h2>
        </div>
      </div>     
      </>
       : <h2> NO HAY DATOS</h2>
    }
      
    </div>
  );
}

export default Card2;


// { id, name, cost, city , image}