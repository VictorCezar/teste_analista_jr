import { AddTimeCard } from '../model/AddTimeCard'
import { Request, Response } from 'express'

interface Model {
  enrollment: number
  startDate: Date
  endDate: Date
}

export class AddTimeCardController {
  async perform (httpRequest: Request, httpResponse: Response): Promise<Response> {
    const { enrollment, startDate, endDate } = httpRequest.body as unknown as Model
    await new AddTimeCard(enrollment, startDate, endDate).execute()
    return httpResponse.status(201).json({ message: 'TimeCard created' })
  }
}
