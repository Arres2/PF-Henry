import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const servicesData: Prisma.servicesCreateInput[] = [
{	service:'Llamada de emergencia',	},
{	service:'Uso de un botiquín médico',	},
{	service:'Entrega de correspondencia en la habitación, al recibirla',	},
{	service:'Despierta a una hora determinada',	},
{	service:'Proporcionar agua caliente, agujas, hilos, un juego de platos y cubiertos',	},
{	service:'Servicios de organizaciones de catering (bar, restaurante, café, buffet, cervecería).',	},
{	service:'Tiendas (de recuerdos, de comida, máquinas expendedoras, etc.).',	},
{	service:'Infraestructura de entretenimiento (discoteca, casino, club nocturno, sala de máquinas tragamonedas, sala de billar).',	},
{	service:'Servicio de excursiones, servicios de guía-traductor.',	},
{	service:'Organización de la venta de entradas para teatros, circo, conciertos, etc.',	},
{	service:'Servicios de transporte (reserva de billetes para todo tipo de transporte, reserva de vehículos a petición de los huéspedes, llamada de taxi, alquiler de coches).',	},
{	service:'Compra y entrega de flores.',	},
{	service:'Venta de recuerdos, postales y otros materiales impresos.',	},
{	service:'Servicios al consumidor (reparación y limpieza de calzado; reparación y planchado de ropa; servicios de tintorería y servicios de lavandería; almacenamiento de cosas y objetos de valor; descarga, carga y entrega de equipaje en la habitación; alquiler de artículos domésticos - televisores, vajillas, equipos deportivos, etc.; reparación de relojes, electrodomésticos, equipos de radio; peluquerías, salas de manicura y masaje y otros servicios domésticos).',	},
{	service:'Servicios de un salón de belleza.',	},
{	service:'Sauna, baño, piscinas, gimnasio.',	},
{	service:'Alquiler de salas de negociación, sala de conferencias.',	},
{	service:'Servicios del centro de negocios',	},
{	service:'otros servicios.',	},   
]
