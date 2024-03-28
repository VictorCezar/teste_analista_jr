import { TimeCard } from './TimeCard'

export class Employee {
  private readonly enrollment: number
  private name: string
  private salary: number
  private role: string
  private timeCards: TimeCard[] = []

  constructor (enrollment: number, name: string, salary: number, role: string) {
    this.enrollment = enrollment
    this.name = name
    this.salary = salary
    this.role = role
  }

  get Enrollment (): number {
    return this.enrollment
  }

  get Name (): string {
    return this.name
  }

  set Name (name: string) {
    this.name = name
  }

  get Salary (): number {
    return this.salary
  }

  set Salary (salary: number) {
    this.salary = salary
  }

  get Role (): string {
    return this.role
  }

  set Role (role: string) {
    this.role = role
  }

  get TimeCards (): TimeCard[] {
    return this.timeCards
  }

  set TimeCards (timeCards: TimeCard[]) {
    this.timeCards = timeCards
  }

  addTimeCard (timeCard: TimeCard): void {
    this.timeCards.push(timeCard)
  }
}
