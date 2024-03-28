import { ReportEmployees } from '../model/ReportEmployees'
import { Request, Response } from 'express'

interface Model {
  date: Date
}

export class ReportEmployeesController {
  async perform (httpRequest: Request, httpResponse: Response): Promise<Response> {
    const { date } = httpRequest.params as unknown as Model
    const employees = await new ReportEmployees(date).execute()
    return httpResponse.status(200).json({ employees })
  }
}
