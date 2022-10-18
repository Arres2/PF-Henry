import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const customerData: Prisma.customerCreateInput[] = [
{	name:'Garcia Jeronimo',	birthday:'23393',	phoneNumber:'95(07)864-72-59',	email:'GiménezEstefania@correo.com',		},
{	name:'Gimenez Estefania',		birthday:'23188',	phoneNumber:'3(49)020-21-39',	email:'PérezGuillermo@correo.com',		},
{	name:'Perez Guillermo',			birthday:'23514',		email:'SorianoEliana@correo.com',		},
{	name:'Soriano Eliana',			email:'GutierrezJose@correo.com',		},
{	name:'Gutierrez Jose',			birthday:'22067',	phoneNumber:'5(72)029-10-28',	email:'ReinaMarcela@correo.com',		},
{	name:'Reina Marcela',		phoneNumber:'2(0261)025-55-62',	email:'RamirezDaniela@correo.com',		},
]