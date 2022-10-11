/*
  Warnings:

  - Added the required column `cityCountry` to the `hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hotel" ADD COLUMN     "cityCountry" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "services" INTEGER;
