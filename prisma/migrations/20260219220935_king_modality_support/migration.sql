-- CreateTable
CREATE TABLE "public"."KingOfTheCourt" (
    "id" SERIAL NOT NULL,
    "fieldId" INTEGER NOT NULL,
    "modality" TEXT NOT NULL,
    "teamId" INTEGER,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KingOfTheCourt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "KingOfTheCourt_fieldId_modality_key" ON "public"."KingOfTheCourt"("fieldId", "modality");

-- AddForeignKey
ALTER TABLE "public"."KingOfTheCourt" ADD CONSTRAINT "KingOfTheCourt_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "public"."Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."KingOfTheCourt" ADD CONSTRAINT "KingOfTheCourt_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "public"."Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."KingOfTheCourt" ADD CONSTRAINT "KingOfTheCourt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
