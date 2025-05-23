/*
  Warnings:

  - You are about to drop the column `artistId` on the `Discography` table. All the data in the column will be lost.
  - You are about to drop the column `artistId` on the `Library` table. All the data in the column will be lost.
  - You are about to drop the column `libraryId` on the `Library` table. All the data in the column will be lost.
  - Made the column `discographyId` on table `Artist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `libraryId` on table `Artist` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Artist" DROP CONSTRAINT "Artist_discographyId_fkey";

-- DropForeignKey
ALTER TABLE "Artist" DROP CONSTRAINT "Artist_libraryId_fkey";

-- DropIndex
DROP INDEX "Artist_discographyId_key";

-- DropIndex
DROP INDEX "Artist_libraryId_key";

-- DropIndex
DROP INDEX "Discography_artistId_key";

-- DropIndex
DROP INDEX "Library_artistId_key";

-- DropIndex
DROP INDEX "Library_libraryId_key";

-- AlterTable
ALTER TABLE "Artist" ALTER COLUMN "discographyId" SET NOT NULL,
ALTER COLUMN "libraryId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Discography" DROP COLUMN "artistId";

-- AlterTable
ALTER TABLE "Library" DROP COLUMN "artistId",
DROP COLUMN "libraryId";

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_discographyId_fkey" FOREIGN KEY ("discographyId") REFERENCES "Discography"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
