/*
  Warnings:

  - You are about to drop the column `homeCourt` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `preferredCourt` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Team" DROP COLUMN "homeCourt",
DROP COLUMN "preferredCourt",
ADD COLUMN     "homeFieldId" INTEGER,
ADD COLUMN     "preferredFieldId" INTEGER;

-- CreateTable
CREATE TABLE "public"."Field" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "photoUrl" TEXT,
    "rating" DOUBLE PRECISION DEFAULT 0,
    "comments" TEXT[],
    "isPaid" BOOLEAN NOT NULL,
    "price" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Team" ADD CONSTRAINT "Team_preferredFieldId_fkey" FOREIGN KEY ("preferredFieldId") REFERENCES "public"."Field"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Team" ADD CONSTRAINT "Team_homeFieldId_fkey" FOREIGN KEY ("homeFieldId") REFERENCES "public"."Field"("id") ON DELETE SET NULL ON UPDATE CASCADE;
