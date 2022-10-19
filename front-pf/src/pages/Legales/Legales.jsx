import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'

export default function Legales() {
  return (
    <div>
        <NavBar/>
        <div className='m-4'>


      <h2 >AVISO LEGAL</h2>

      <p>En Travelop estamos comprometidos con la protección de su privacidad y en asegurar que sus datos personales sean  tratados de acuerdo con la ley aplicable y las mejores prácticas del mercado. Somos transparentes respecto de nuestras prácticas y estamos a disposición para responder cualquier consulta sobre las mismas.</p>

      <h3 className='text-2xl'>Categorías de información personal que recopilamos</h3>
     <p>Cuando usas nuestra plataforma, aplicaciones o herramientas y servicios relacionados, recopilamos los siguientes tipos de información personal según corresponda:</p>
    <ul className='list-disc'>
        <li>Nombre, nombre de usuario, dirección de correo electrónico, y número de teléfono y direcciones personales, comerciales y de facturación (con calle y código postal).</li>
        <li>Identificación oficial necesaria para reservaciones o verificación de identidad, como pasaporte, licencia de conducir, números de compensación oficiales y país de residencia (para el seguro de viaje), y para dueños de propiedades vacacionales, número de identificación fiscal.</li>
        <li>Información de pago, como número de tarjeta, fecha de vencimiento, dirección de facturación y número de cuenta financiera.</li>
        <li>Preferencias y solicitudes relacionadas con viajes, como destino y tipos de hospedaje favoritos, y necesidades especiales de alimentación y facilidades de acceso, si hubiera.</li>
        <li>Información del programa de lealtad y membresía.</li>
        <li>Fecha de nacimiento y sexo.</li>
        <li>Ubicación geográfica.</li>
        <li>Búsquedas, transacciones y otras interacciones en nuestros servicios en línea y aplicaciones.</li>
        <li>Búsquedas y transacciones hechas a través de la plataforma.</li>
        <li>Información que nos das sobre otras personas, como compañeros de viaje u otros para quienes haces una reservación.</li>
    </ul>

      <h3 className='text-2xl'>Contacto</h3>
        <p>Si tienes alguna consulta sobre el uso de tu información personal o si quieres preguntar sobre nuestras prácticas de manejo de información personal, contáctanos a este correo travelop@travel.com.</p>

        <h3 className='text-2xl'>Actualizaciones de la Declaración</h3>
        <p>Podemos actualizar esta Declaración si existen cambios en la legislación o en función de los desarrollos técnicos o empresariales. Si proponemos hacer algún cambio importante, te enviaremos un aviso en esta página. Puedes encontrar la fecha de la última actualización en la parte superior de este documento.</p>
        

        <h2>Terminos y condiciones</h2>

        <p>Travelop se reserva el derecho a resolver cualquier situacion que este fuera del control del servicio, incluido el mal uso de la aplicacion, la informacion incorrecta del usuario, la incorrecta eleccion de los paquetes de viajes, la mala conexion del usuario o alguna falla que de otra indole.</p>
        </div>
    <Footer/>
    </div>
  )
}
