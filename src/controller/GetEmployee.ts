import { GetEmployee } from '../model/GetEmployee'
import { Request, Response } from 'express'

interface Model {
  enrollment: number
}

export class GetEmployeeController {
  async perform (httpRequest: Request, httpResponse: Response): Promise<Response> {
    const { enrollment } = httpRequest.params as unknown as Model
    const employee = await new GetEmployee(Number(enrollment)).execute()
    return httpResponse.status(200).json({ employee })
  }
}
