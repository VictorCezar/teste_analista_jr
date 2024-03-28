import { AddEmployee } from './AddEmployee'
import { AddTimeCard } from './AddTimeCard'
import { ChangeEmployee } from './ChangeEmployee'
import { Employee } from './Employee'
import { GetEmployee } from './GetEmployee'
import { PgPrismaDatabase } from '../database/prisma'
import { RemoveEmployee } from './RemoveEmployee'
import { ReportEmployees } from './ReportEmployees'
import { TimeCard } from './TimeCard'

describe('Employee', () => {
  describe('AddEmployee', () => {
    it('should be able create an instance of AddEmployee', async () => {
      const employee = new AddEmployee(1, 'John Doe', 1000, 'Analyst')
      await employee.execute()

      const dbEmployee = PgPrismaDatabase.employees.get(1)

      expect(dbEmployee?.Enrollment).toBe(1)
    })
  })

  describe('ChangeEmployee', () => {
    it('should be able change employee name', async () => {
      const employee = new AddEmployee(1, 'John Doe', 1000, 'Analyst')
      await employee.execute()

      const changed = new ChangeEmployee(1, 'Victor')
      await changed.execute()

      const dbEmployee = PgPrismaDatabase.employees.get(1)

      expect(dbEmployee?.Name).toBe('Victor')
    })

    it('should be able change employee salary', async () => {
      const employee = new AddEmployee(1, 'John Doe', 1000, 'Analyst')
      await employee.execute()

      const changed = new ChangeEmployee(1, undefined, 2000)
      await changed.execute()

      const dbEmployee = PgPrismaDatabase.employees.get(1)

      expect(dbEmployee?.Salary).toBe(2000)
    })

    it('should be able change employee role', async () => {
      const employee = new AddEmployee(1, 'John Doe', 1000, 'Analyst')
      await employee.execute()

      const changed = new ChangeEmployee(1, undefined, undefined, 'Manager')
      await changed.execute()

      const dbEmployee = PgPrismaDatabase.employees.get(1)

      expect(dbEmployee?.Role).toBe('Manager')
    })
  })

  describe('RemoveEmployee', () => {
    it('should be able remove employee', async () => {
      const employee = new AddEmployee(1, 'John Doe', 1000, 'Analyst')
      await employee.execute()

      await new RemoveEmployee(1).execute()

      const dbEmployee = PgPrismaDatabase.employees.get(1)

      expect(dbEmployee).toBeUndefined()
    })
  })

  describe('GetEmployee', () => {
    it('should be able get employee', async () => {
      const employee = new AddEmployee(1, 'John Doe', 1000, 'Analyst')
      await employee.execute()

      const dbEmployee = new GetEmployee(1).execute()

      expect(dbEmployee).toEqual(new Employee(1, 'John Doe', 1000, 'Analyst'))
    })
  })

  describe('GetEmployee', () => {
    it('should be able get employee', async () => {
      const employee = new AddEmployee(1, 'John Doe', 1000, 'Analyst')
      await employee.execute()

      const dbEmployee = PgPrismaDatabase.employees.get(1)
      dbEmployee?.addTimeCard(new TimeCard(dbEmployee.Enrollment, new Date('2021-01-01 08:00:00'), new Date('2021-01-01 18:00:00')))

      expect(dbEmployee?.TimeCards).toHaveLength(1)
    })
  })

  describe('ReportEmployees', () => {
    it('should be able get employees in date', async () => {
      const employee1 = new AddEmployee(1, 'John Doe', 1000, 'Analyst')
      await employee1.execute()
      const dbEmployee1 = PgPrismaDatabase.employees.get(1)
      dbEmployee1?.addTimeCard(new TimeCard(dbEmployee1.Enrollment, new Date('2024-01-01T08:00:00Z'), new Date('2024-01-01T18:00:00Z')))

      const employee2 = new AddEmployee(2, 'Jane Doe', 1000, 'Analyst')
      await employee2.execute()
      const dbEmployee2 = PgPrismaDatabase.employees.get(2)
      dbEmployee2?.addTimeCard(new TimeCard(dbEmployee2.Enrollment, new Date('2024-02-01T08:00:00Z'), new Date('2024-02-01T18:00:00Z')))

      const employee3 = new AddEmployee(3, 'Jane Doe', 1000, 'Analyst')
      await employee3.execute()
      const dbEmployee3 = PgPrismaDatabase.employees.get(3)
      dbEmployee3?.addTimeCard(new TimeCard(dbEmployee3.Enrollment, new Date('2024-01-01T08:00:00Z'), new Date('2024-01-01T18:00:00Z')))
      dbEmployee3?.addTimeCard(new TimeCard(dbEmployee3.Enrollment, new Date('2024-03-02T08:00:00Z'), new Date('2024-03-02T18:00:00Z')))
      dbEmployee3?.addTimeCard(new TimeCard(dbEmployee3.Enrollment, new Date('2024-03-01T08:00:00Z'), new Date('2024-03-01T18:00:00Z')))

      const employeesInDate = new ReportEmployees(new Date('2024-03-10T00:00:00Z'))
      const reports = await employeesInDate.execute()

      expect(employeesInDate).toHaveLength(1)
      expect(reports[0].TimeCards).toHaveLength(2)
    })
  })

  describe('AddTimeCard', () => {
    it('should be able add time card to employee', async () => {
      const employee = new AddEmployee(1, 'John Doe', 1000, 'Analyst')
      await await employee.execute()

      const timeCard = new AddTimeCard(1, new Date('2021-01-01 08:00:00'), new Date('2021-01-01 18:00:00'))
      await timeCard.execute()

      const dbEmployee = PgPrismaDatabase.employees.get(1)

      expect(dbEmployee?.TimeCards).toHaveLength(1)
    })
  })
})
