import { Employee } from './Employee'
import { PgPrismaDatabase } from '../database/prisma'

export class GetEmployee {
  constructor (private readonly enrollment: number) {
    this.enrollment = enrollment
  }

  async execute (): Promise<Employee> {
    const employee = await PgPrismaDatabase.getEmployee(this.enrollment)
    if (employee !== undefined) {
      return employee
    } else {
      throw new Error('Employee not found')
    }
  }
}
