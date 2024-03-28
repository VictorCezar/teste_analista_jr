import { RemoveEmployee } from '../model/RemoveEmployee'
import { Request, Response } from 'express'

interface Model {
  enrollment: number
}

export class RemoveEmployeeController {
  async perform (httpRequest: Request, httpResponse: Response): Promise<Response> {
    const { enrollment } = httpRequest.params as unknown as Model
    await new RemoveEmployee(enrollment).execute()
    return httpResponse.status(204).json({ message: 'Employee removed' })
  }
}
