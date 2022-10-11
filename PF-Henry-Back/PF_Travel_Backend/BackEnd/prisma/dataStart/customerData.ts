import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const customerData: Prisma.customerCreateInput[] = [
{	name:'Garcia Jeronimo',		identification:'3302762178',	birthday:'23393',	phoneNumber:'95(07)864-72-59',	email:'GiménezEstefania@correo.com',	numberCard:'451485624995',	},
{	name:'Gimenez Estefania',		identification:'D6925188835',	birthday:'23188',	phoneNumber:'3(49)020-21-39',	email:'PérezGuillermo@correo.com',	numberCard:'409312879500',	},
{	name:'Perez Guillermo',		identification:'1073295563',	birthday:'23514',	phoneNumber:'04(6320)072-61-09',	email:'SorianoEliana@correo.com',	numberCard:'599473230559',	},
{	name:'Soriano Eliana',		identification:'E8679167452',	birthday:'23294',	phoneNumber:'991(41)431-64-56',	email:'GutierrezJose@correo.com',	numberCard:'300052255315',	},
{	name:'Gutierrez Jose',		identification:'P9374716276-4',	birthday:'22067',	phoneNumber:'5(72)029-10-28',	email:'ReinaMarcela@correo.com',	numberCard:'84993530970',	},
{	name:'Reina Marcela',		identification:'7535603486',	birthday:'23298',	phoneNumber:'2(0261)025-55-62',	email:'RamirezDaniela@correo.com',	numberCard:'955765089049',	},

]