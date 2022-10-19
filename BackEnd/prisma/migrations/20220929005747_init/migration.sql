-- CreateTable
CREATE TABLE "familyPackage" (
    "id" TEXT NOT NULL,
    "billingId" TEXT NOT NULL,
    "package" TEXT NOT NULL,
    "cost" MONEY NOT NULL,

    CONSTRAINT "familyPackage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "touristPackage" (
    "id" TEXT NOT NULL,
    "famPackageId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "accommodationId" TEXT NOT NULL,
    "excursionId" TEXT NOT NULL,
    "cost" MONEY NOT NULL,

    CONSTRAINT "touristPackage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "identification" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "numberCard" TEXT NOT NULL,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket" (
    "id" TEXT NOT NULL,
    "fligthId" TEXT,
    "company" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "chair" TEXT NOT NULL,
    "cost" MONEY NOT NULL,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accommodation" (
    "id" TEXT NOT NULL,
    "hotelId" INTEGER,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "class" INTEGER NOT NULL,
    "cost" MONEY NOT NULL,
    "services" INTEGER NOT NULL,

    CONSTRAINT "accommodation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "excursion" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "address" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "cost" MONEY NOT NULL,

    CONSTRAINT "excursion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "contact" TEXT NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotel" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cityCountry" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "description" TIMESTAMP(3) NOT NULL,
    "image" TEXT NOT NULL,
    "services" INTEGER NOT NULL,

    CONSTRAINT "hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" SERIAL NOT NULL,
    "service" TEXT NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" SERIAL NOT NULL,
    "services" INTEGER NOT NULL,
    "cost" MONEY NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "detail" TEXT NOT NULL,

    CONSTRAINT "type_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_email_key" ON "customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customer_numberCard_key" ON "customer"("numberCard");

-- CreateIndex
CREATE UNIQUE INDEX "hotel_email_key" ON "hotel"("email");
