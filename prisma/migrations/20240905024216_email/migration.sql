-- CreateTable
CREATE TABLE "emails" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sentTo" TEXT NOT NULL,
    "sentFrom" TEXT NOT NULL,
    "sentReply" TEXT,

    CONSTRAINT "emails_pkey" PRIMARY KEY ("id")
);
