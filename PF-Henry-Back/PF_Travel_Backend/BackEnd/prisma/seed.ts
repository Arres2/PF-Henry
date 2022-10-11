import { PrismaClient, Prisma } from '@prisma/client'
import {companyData} from './dataStart/companyData'
import {customerData} from './dataStart/customerData'
import {hotelData} from './dataStart/hotelData'
import { servicesData } from './dataStart/servicesData'


const prisma = new PrismaClient()


// carga de datos de customers
// const customerData: Prisma.customerCreateInput[] = [
//     {
//         name: 'William',       
//         identification: '80002838',
//         birthday: '28/01/1979',
//         phoneNumber: '3002812437',
//         email: 'willygarciaz@gmail.com',
//         numberCard: '4512-5266985-23652',
//     },
//     {
//         name: 'Claudia',        
//         identification: '523658965',
//         birthday: '12/08/1981',
//         phoneNumber: '3012653895',
//         email: 'claupb@gmaill.com',
//         numberCard: '5632-569856-586',
//     },
// ]
// //  carga de datos de Hoteles 

// const hotelData: Prisma.hotelCreateInput[] = [
//     {
//         name: 'William',
//         phoneNumber: '80002838',
//         address: '28/01/1979',
//         cityCountry: '3002812437',
//         email: 'willygarciaz@gmail.com',
//         description: '4512-5266985-23652',
//         image: '',
//         services: 2,
//     },
// ]

// // carga de datos de servicios
// const servicesData: Prisma.servicesCreateInput[] = [
//     {
//         service: 'desayuno',
//     }
// ]

// // carga de datos de company
// const companyData: Prisma.companyCreateInput[] = [
//     {
//         name: 'William',
//         contact: '28/01/1979',     
//     },
// ]

// // carga de datos de accommodations
// const accommodationsonsData: Prisma.accommodationCreateInput[] = [
//     {        
//         hotelId: 0,
//         location: '3002812437',
//         description: 'willygarciaz@gmail.com',
//         class: 5,
//         cost: '',
//         services: 10,        
//     },
// ]

// // carga de datos de excursions
// const excursionsData: Prisma.excursionCreateInput[] = [
//     {
//         name: 'William',
//         address: '28/01/1979',
//         startDate: '3002812437',
//         endDate: 'willygarciaz@gmail.com',
//         type: '4512-5266985-23652',
//         cost: 10,        
//     },
// ]

async function main() {
    console.log(`Start Seeding...`)
    for (const u of customerData) {
        const customer = await prisma.customer.create({
            data: u,
        })
        console.log(`Created costumer with id: ${customer.id}`)
    }
    for (const u of companyData) {
        const company = await prisma.company.create({
            data: u,
        })
        console.log(`Created company with id: ${company.id}`)
    }
    for (const u of servicesData) {
        const services = await prisma.services.create({
            data: u,
        })
        console.log(`Created services with id: ${services.id}`)
    }
    for (const u of hotelData) {
        const hotel = await prisma.hotel.create({
            data: u,
        })
        console.log(`Created hotel with id: ${hotel.id}`)
    }
    console.log(`Seedding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
            process.exit(1)        
    })