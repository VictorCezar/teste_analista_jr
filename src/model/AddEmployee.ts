import { Employee } from './Employee'
import { PgPrismaDatabase } from '../database/prisma'
import { Transaction } from './transaction'

export class AddEmployee implements Transaction {
  constructor (private readonly enrollment: number, private readonly name: string, private readonly salary: number, private readonly role: string) {
    this.enrollment = enrollment
    this.name = name
    this.salary = salary
    this.role = role
  }

  async execute (): Promise<void> {
    const employee = new Employee(this.enrollment, this.name, this.salary, this.role)
    await PgPrismaDatabase.addEmployee(employee)
  }
}
