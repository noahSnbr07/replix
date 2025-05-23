-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "hideExplicit" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "libraryId" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Library" (
    "id" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Library_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "avatar" TEXT NOT NULL,
    "libraryId" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Song" (
    "id" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "audio" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "explicit" BOOLEAN NOT NULL DEFAULT false,
    "collectionId" TEXT NOT NULL,
    "libraryId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_key" ON "Profile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Library_id_key" ON "Library"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_id_key" ON "Collection"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Song_id_key" ON "Song"("id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
