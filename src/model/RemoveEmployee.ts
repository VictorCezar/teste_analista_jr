import { PgPrismaDatabase } from '../database/prisma'
import { Transaction } from './transaction'

export class RemoveEmployee implements Transaction {
  constructor (private readonly enrollment: number) {
    this.enrollment = enrollment
  }

  async execute (): Promise<void> {
    const employee = await PgPrismaDatabase.getEmployee(this.enrollment)
    if (employee !== undefined) {
      await PgPrismaDatabase.removeEmployee(employee.Enrollment)
    }
  }
}
