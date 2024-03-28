import { PgPrismaDatabase } from '../database/prisma'
import { TimeCard } from './TimeCard'
import { Transaction } from './transaction'

export class AddTimeCard implements Transaction {
  constructor (private readonly enrollment: number, private readonly startDate: Date, private readonly endDate: Date) {
    this.enrollment = enrollment
    this.startDate = startDate
    this.endDate = endDate
  }

  async execute (): Promise<void> {
    const employee = await PgPrismaDatabase.getEmployee(this.enrollment)
    if (employee !== undefined) {
      const timeCard = new TimeCard(this.enrollment, this.startDate, this.endDate)
      employee.addTimeCard(timeCard)
      await PgPrismaDatabase.saveEmployee(employee)
    }
  }
}
