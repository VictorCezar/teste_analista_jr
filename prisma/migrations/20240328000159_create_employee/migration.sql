-- CreateTable
CREATE TABLE "employees" (
    "enrollment" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("enrollment")
);

-- CreateTable
CREATE TABLE "time_cards" (
    "id" SERIAL NOT NULL,
    "employeeEnrollment" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "time_cards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "time_cards" ADD CONSTRAINT "time_cards_employeeEnrollment_fkey" FOREIGN KEY ("employeeEnrollment") REFERENCES "employees"("enrollment") ON DELETE RESTRICT ON UPDATE CASCADE;
