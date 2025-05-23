/*
  Warnings:

  - You are about to drop the column `profileId` on the `Collection` table. All the data in the column will be lost.
  - You are about to drop the column `audio` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[artistId]` on the table `Library` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[libraryId]` on the table `Library` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `discographyId` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `artistId` to the `Library` table without a default value. This is not possible if the table is not empty.
  - Added the required column `libraryId` to the `Library` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discographyId` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CollectionType" AS ENUM ('Album', 'EP', 'Single');

-- DropForeignKey
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_libraryId_fkey";

-- DropForeignKey
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_collectionId_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_libraryId_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_libraryId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profileId_fkey";

-- AlterTable
ALTER TABLE "Collection" DROP COLUMN "profileId",
ADD COLUMN     "discographyId" TEXT NOT NULL,
ADD COLUMN     "private" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "type" "CollectionType" NOT NULL,
ALTER COLUMN "libraryId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Library" ADD COLUMN     "artistId" TEXT NOT NULL,
ADD COLUMN     "libraryId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "audio",
DROP COLUMN "profileId",
DROP COLUMN "userId",
ADD COLUMN     "discographyId" TEXT NOT NULL,
ALTER COLUMN "collectionId" DROP NOT NULL,
ALTER COLUMN "libraryId" DROP NOT NULL;

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Artist" (
    "id" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "discographyId" TEXT,
    "libraryId" TEXT,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Discography" (
    "id" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "artistId" TEXT NOT NULL,

    CONSTRAINT "Discography_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Artist_name_key" ON "Artist"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_discographyId_key" ON "Artist"("discographyId");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_libraryId_key" ON "Artist"("libraryId");

-- CreateIndex
CREATE UNIQUE INDEX "Discography_artistId_key" ON "Discography"("artistId");

-- CreateIndex
CREATE UNIQUE INDEX "Library_artistId_key" ON "Library"("artistId");

-- CreateIndex
CREATE UNIQUE INDEX "Library_libraryId_key" ON "Library"("libraryId");

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discography" ADD CONSTRAINT "Discography_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_discographyId_fkey" FOREIGN KEY ("discographyId") REFERENCES "Discography"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_discographyId_fkey" FOREIGN KEY ("discographyId") REFERENCES "Discography"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE SET NULL ON UPDATE CASCADE;
