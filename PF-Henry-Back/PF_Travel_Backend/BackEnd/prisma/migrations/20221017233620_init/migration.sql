-- AlterTable
ALTER TABLE "customer" ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "picture" TEXT,
ALTER COLUMN "name" DROP NOT NULL;
