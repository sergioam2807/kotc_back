/*
  Warnings:

  - Changed the type of `targetType` on the `Rating` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."RatingTargetType" AS ENUM ('field', 'team', 'player');

-- AlterTable
ALTER TABLE "public"."Rating" DROP COLUMN "targetType",
ADD COLUMN     "targetType" "public"."RatingTargetType" NOT NULL;
