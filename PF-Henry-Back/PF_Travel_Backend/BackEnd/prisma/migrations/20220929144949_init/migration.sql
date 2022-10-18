/*
  Warnings:

  - You are about to drop the column `company` on the `ticket` table. All the data in the column will be lost.
  - You are about to drop the column `accommodationId` on the `touristPackage` table. All the data in the column will be lost.
  - You are about to drop the column `excursionId` on the `touristPackage` table. All the data in the column will be lost.
  - You are about to drop the column `famPackageId` on the `touristPackage` table. All the data in the column will be lost.
  - Made the column `hotelId` on table `accommodation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `hotel` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `companyId` to the `ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `familyPId` to the `touristPackage` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "hotel_email_key";

-- AlterTable
ALTER TABLE "accommodation" ALTER COLUMN "hotelId" SET NOT NULL,
ALTER COLUMN "hotelId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "customer" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "excursion" ALTER COLUMN "startDate" SET DATA TYPE TEXT,
ALTER COLUMN "endDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "hotel" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "description" SET DATA TYPE TEXT,
ALTER COLUMN "services" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ticket" DROP COLUMN "company",
ADD COLUMN     "companyId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "touristPackage" DROP COLUMN "accommodationId",
DROP COLUMN "excursionId",
DROP COLUMN "famPackageId",
ADD COLUMN     "familyPId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "excursionsOnTouristPackage" (
    "excursionId" TEXT NOT NULL,
    "tPackageId" TEXT NOT NULL,

    CONSTRAINT "excursionsOnTouristPackage_pkey" PRIMARY KEY ("excursionId","tPackageId")
);

-- AddForeignKey
ALTER TABLE "touristPackage" ADD CONSTRAINT "touristPackage_familyPId_fkey" FOREIGN KEY ("familyPId") REFERENCES "familyPackage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "touristPackage" ADD CONSTRAINT "touristPackage_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "touristPackage" ADD CONSTRAINT "touristPackage_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "excursionsOnTouristPackage" ADD CONSTRAINT "excursionsOnTouristPackage_excursionId_fkey" FOREIGN KEY ("excursionId") REFERENCES "excursion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "excursionsOnTouristPackage" ADD CONSTRAINT "excursionsOnTouristPackage_tPackageId_fkey" FOREIGN KEY ("tPackageId") REFERENCES "touristPackage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
