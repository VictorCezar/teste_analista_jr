import { AddEmployee } from '../model/AddEmployee'
import { Request, Response } from 'express'

interface Model {
  enrollment: number
  name: string
  salary: number
  role: string
}

export class AddEmployeeController {
  async perform (httpRequest: Request, httpResponse: Response): Promise<Response> {
    const { enrollment, name, salary, role } = httpRequest.body as unknown as Model
    await new AddEmployee(enrollment, name, salary, role).execute()
    return httpResponse.status(201).json({ message: 'Employee created' })
  }
}
