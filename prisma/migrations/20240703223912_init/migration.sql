-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Parts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "gender" TEXT,
    "language" TEXT,
    "role" TEXT,
    "purpose" TEXT,
    "phobia" TEXT,
    "belief" TEXT,
    "triggers" TEXT,
    "formation_story" TEXT,
    "behaviours" TEXT,
    "feelings" TEXT,
    "sensations" TEXT,
    "thoughts" TEXT,
    "exit" TEXT,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "Parts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
