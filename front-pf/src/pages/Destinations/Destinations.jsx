import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar'
import { getHotels } from '../../redux/actions';
import Cards from '../../components/Cards/Cards'
import Pagination from '../../components/Pagination/Pagination';
import data from '../../data.json';
import Footer from '../../components/Footer/Footer';
import fullData from '../dataFull.json';


export default function Paquetes() {
  /*ESTO SON PAISES Y NO PAQUETE. YA ESTA ACLARADO PERO NO LO CAMBIO POR SI LAS DUDAS*/
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);

  const hotels = useSelector(state=> state.hotels);
   //PAGINADO
   const [currentPage,setCurrentPage] = useState(1);
   const [resultsPorPagina] = useState(4);
   
   const indiceUltimo = currentPage * resultsPorPagina;
   const indicePrimero = indiceUltimo - resultsPorPagina;
   let infoHotels = hotels.slice(indicePrimero, indiceUltimo);
   let myData = fullData.slice(indicePrimero,indiceUltimo)
   
   
   
   //Cambio de pagina
 function pagina(pageNumber){
   return setCurrentPage(pageNumber)
 }

 const nextPage = () => {
  console.log(fullData.length)
  console.log(currentPage)
  if(currentPage + 1 <= Math.ceil(data.length / resultsPorPagina)){
    return setCurrentPage(currentPage + 1);
  } else {
    return setCurrentPage(currentPage);
  }
  }
 const prevPage = () => {
  if(currentPage > 1){
     return setCurrentPage(currentPage - 1);
  }
}

  return (
    <div>
      <NavBar />
      <div className="mx-24 my-4">
        <div className="w-auto h-127 my-8">
          <div className=" bg-rock-lake w-full h-full bg-no-repeat bg-cover bg-center rounded-2 text-white flex">
            <p className="my-auto mx-8 text-6xl w-1/4 font-josefin">
              Disfruta los mejores destinos
            </p>
          </div>
        </div>
        <div className="text-start m-4">
          <h2>Elige tu camino</h2>
          <p>
            Encuentra el mejor paquete que se adapte a tu proxima aventura. No
            esperes más y planea tus proximas vacaciones.
          </p>
        </div>


  {/* <Cards hotels={infoHotels}/> */}
  <div>
    <div className='text-start m-8 my-8' ><h3>Principales Destinos Latam</h3></div>
    <Cards hotels={myData}/>
  </div>
  {/* <div className='m-4'>
      <Pagination 
      resultsPorPagina={resultsPorPagina} 
      totalResults={fullData.length} 
      pagina={pagina}
      nextPage={nextPage}
      prevPage={prevPage}
      />
      </div> */}
      </div>
      <Footer />
    </div>
  );
}
