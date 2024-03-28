import { PgPrismaDatabase } from '../database/prisma'
import { Transaction } from './transaction'

export class ChangeEmployee implements Transaction {
  constructor (private readonly enrollment: number, private readonly name?: string, private readonly salary?: number, private readonly role?: string) {
    this.enrollment = enrollment
    this.name = name
    this.salary = salary
    this.role = role
  }

  async execute (): Promise<void> {
    const employee = await PgPrismaDatabase.getEmployee(this.enrollment)
    if (employee !== undefined) {
      employee.Name = this.name ?? employee.Name
      employee.Salary = this.salary ?? employee.Salary
      employee.Role = this.role ?? employee.Role
      await PgPrismaDatabase.saveEmployee(employee)
    }
  }
}
