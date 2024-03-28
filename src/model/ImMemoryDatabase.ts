import { Employee } from './Employee'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ImMemoryDatabase {
  static readonly employees: Map<number, Employee> = new Map()

  static addEmployee (employee: Employee): void {
    this.employees.set(employee.Enrollment, employee)
  }

  static getEmployee (enrollment: number): Employee | undefined {
    return this.employees.get(enrollment)
  }

  static saveEmployee (employee: Employee): void {
    this.employees.set(employee.Enrollment, employee)
  }

  static removeEmployee (enrollment: number): void {
    this.employees.delete(enrollment)
  }

  static getAllEmployees (): Employee[] {
    return Array.from(this.employees.values())
  }
}
