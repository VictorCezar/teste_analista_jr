export class TimeCard {
  private readonly employeeEnrollment: number
  private readonly startDate: Date
  private readonly endDate: Date

  constructor (employeeEnrollment: number, startDate: Date, endDate: Date) {
    this.employeeEnrollment = employeeEnrollment
    this.startDate = new Date(startDate)
    this.endDate = new Date(endDate)
  }

  get EmployeeEnrollment (): number {
    return this.employeeEnrollment
  }

  get StartDate (): Date {
    return this.startDate
  }

  get EndDate (): Date {
    return this.endDate
  }
}
