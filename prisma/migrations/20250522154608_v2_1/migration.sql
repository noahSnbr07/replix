-- DropForeignKey
ALTER TABLE "Discography" DROP CONSTRAINT "Discography_artistId_fkey";

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_discographyId_fkey" FOREIGN KEY ("discographyId") REFERENCES "Discography"("id") ON DELETE SET NULL ON UPDATE CASCADE;
