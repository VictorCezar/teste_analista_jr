import { ChangeEmployee } from '../model/ChangeEmployee'
import { Request, Response } from 'express'

interface Model {
  enrollment: number
  name: string
  salary: number
  role: string
}

export class ChangeEmployeeController {
  async perform (httpRequest: Request, httpResponse: Response): Promise<Response> {
    const { enrollment, name, salary, role } = httpRequest.body as unknown as Model
    await new ChangeEmployee(enrollment, name, salary, role).execute()
    return httpResponse.status(204).json({ message: 'Employee changed' })
  }
}
