import { PrismaClient } from '@prisma/client'

import { Employee } from '../model/Employee'
import { EmployeeMapper } from './mapper'

export const prisma = new PrismaClient()

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PgPrismaDatabase {
  static readonly employees: Map<number, Employee> = new Map()

  static async addEmployee (employee: Employee): Promise<void> {
    await prisma.employee.create({
      data: {
        enrollment: employee.Enrollment,
        name: employee.Name,
        salary: employee.Salary,
        role: employee.Role
      }
    })
  }

  static async getEmployee (enrollment: number): Promise<Employee | undefined> {
    const raw = await prisma.employee.findUnique({
      where: {
        enrollment
      },
      include: {
        timeCards: true
      }
    })

    return EmployeeMapper.toEntity(raw)
  }

  static async saveEmployee (employee: Employee): Promise<void> {
    await prisma.employee.update({
      where: {
        enrollment: employee.Enrollment
      },
      data: {
        name: employee.Name,
        salary: employee.Salary,
        role: employee.Role,
        timeCards: {
          createMany: {
            data: employee.TimeCards.map(timeCard => ({
              startDate: timeCard.StartDate,
              endDate: timeCard.EndDate
            }))
          }
        }
      }
    })
  }

  static async removeEmployee (enrollment: number): Promise<void> {
    await prisma.employee.delete({
      where: {
        enrollment
      }
    })
  }

  static async getAllEmployees (): Promise<Employee[]> {
    const raw = await prisma.employee.findMany({
      include: {
        timeCards: true
      }
    })

    return raw.map(EmployeeMapper.toEntity)
  }
}
