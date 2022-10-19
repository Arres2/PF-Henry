import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const companyData: Prisma.companyCreateInput[] = [
    {	name:'American Airlines (AA)',	contact:'https://www.wego.com/airlines/american-airlines-aa',				},
    {	name:'Aerolineas Argentinas (AR)',	contact:'https://www.wego.com/airlines/aerolineas-argentinas-ar',				},
    {	name:'Avianca (AV)',	contact:'https://www.wego.com/airlines/avianca-av',				},
    {	name:'Aeromexico (AM)',	contact:'https://www.wego.com/airlines/aeromexico-am',				},
    {	name:'Copa Airlines (CM)',	contact:'https://www.wego.com/airlines/copa-airlines-cm',				},
    {	name:'LATAM Airlines Group SA (LA)',	contact:'https://www.wego.com/airlines/latam-airlines-group-sa-la',				},
    {	name:'United Airlines (UA)',	contact:'https://www.wego.com/airlines/united-airlines-ua',				},
    {	name:'Delta Air Lines (DL)',	contact:'https://www.wego.com/airlines/delta-air-lines-dl',				},
    {	name:'Air France (AF)',	contact:'https://www.wego.com/airlines/air-france-af',				},
    {	name:'Lufthansa (LH)',	contact:'https://www.wego.com/airlines/lufthansa-lh',				},
    {	name:'KLM (KL)',	contact:'https://www.wego.com/airlines/klm-kl',				},
    {	name:'Qatar Airways (QR)',	contact:'https://www.wego.com/airlines/qatar-airways-qr',				},
    {	name:'Air Europa (UX)',	contact:'https://www.wego.com/airlines/air-europa-ux',				},
    {	name:'Sky Airline (H2)',	contact:'https://www.wego.com/airlines/sky-airline-h2',				},
    {	name:'Iberia (IB)',	contact:'https://www.wego.com/airlines/iberia-ib',				},
]
