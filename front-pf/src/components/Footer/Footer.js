import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import CaruselPropaganda from "../Propaganda/Propaganda";
import s from './Footer.module.css';

export default function Footer() {
  return (
    <div className={s.footerContainer} class="bg-1-color">
      <div className={s.containerIzqFooter}>
        <div className={s.containerFooterInfo}>
          <ul className={s.ulFooter}>
            <li>
              <li>
                <img src="/images/logo1.png" alt="logo" className="w-20 h-20" />
              </li>
              <h3>Travelop.<span className="text-xs mt-3">LATAM</span></h3>
              Empresa de viaje
            </li>
          </ul>
        </div>
        <div className={s.containerFooterInfo}>
          <ul className={s.ulFooter}>
            <li>
              <h3>Redes</h3>
              <InstagramIcon fontSize="large" />
              <FacebookIcon fontSize="large" />
              <TwitterIcon fontSize="large" />
            </li>
            <li>
              <h3>Contacto</h3>
              <EmailIcon fontSize="large" />
              <CallIcon fontSize="large" />
            </li>
          </ul>
        </div>
        <div className={s.containerFooterInfo}>
          <h2 className="text-white text-2xl">Politicas</h2>
          <ul className='flex flex-row my-4'>
            <Link to={'/legales'} className="no-underline">
              <li className=' text-zinc-300 hover:text-5-color transition ease-in duration-200 cursor-pointer text-xl font-semibold'>Legales</li>
            </Link> 
        </ul>
        </div>
        <div className={s.containerFooterInfo}>
          <h2 className="text-white text-2xl">Conocenos</h2>
          <ul className='flex flex-row my-4'>
            <Link to={'/aboutus'} className="no-underline ">
            <li className='text-zinc-300 hover:text-4-color transition ease-in duration-200 cursor-pointer text-xl font-semibold'>About Us</li>
            </Link> 
          </ul>
        </div>
        <div className={s.containerFooterCarrusel}>
          <CaruselPropaganda />
        </div>
        
      </div>
    </div>
  );
}
