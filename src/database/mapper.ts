import { TimeCard } from '../model/TimeCard'
import { Employee } from '../model/Employee'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class EmployeeMapper {
  static toEntity (data: any): Employee {
    const employee = new Employee(data.enrollment, data.name, data.salary, data.role)
    employee.TimeCards = data.timeCards.map((item: any) => {
      return new TimeCard(
        item.employeeEnrollment,
        item.startDate,
        item.endDate
      )
    })

    return employee
  }
}
