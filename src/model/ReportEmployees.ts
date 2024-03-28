import { Employee } from './Employee'
import { PgPrismaDatabase } from '../database/prisma'

export class ReportEmployees {
  constructor (private readonly date: Date) {
    this.date = new Date(date)
  }

  async execute (): Promise<Employee[]> {
    const employees = await PgPrismaDatabase.getAllEmployees()
    console.log(employees[0].TimeCards)

    const employeesInDate: Employee[] = []
    for (const employee of employees) {
      employee.TimeCards = employee.TimeCards.filter(timeCard => {
        const startDate = timeCard.StartDate
        const endDate = timeCard.EndDate
        const isTargetMonth = this.getCurrentMonthInDate(startDate) === this.getCurrentMonthInDate(this.date) && this.getCurrentMonthInDate(endDate) === this.getCurrentMonthInDate(this.date)
        return isTargetMonth
      })
      if (employee.TimeCards.length > 0) {
        employeesInDate.push(employee)
      }
    }
    return employeesInDate
  }

  private getCurrentMonthInDate (date: Date): number {
    return date.getMonth()
  }
}
