/*
  Warnings:

  - You are about to drop the column `numberCard` on the `customer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `customer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'SUPERADMIN');

-- DropIndex
DROP INDEX "customer_numberCard_key";

-- AlterTable
ALTER TABLE "customer" DROP COLUMN "numberCard",
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "picture" TEXT,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "identification" DROP NOT NULL,
ALTER COLUMN "birthday" DROP NOT NULL,
ALTER COLUMN "phoneNumber" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "customer_id_key" ON "customer"("id");
