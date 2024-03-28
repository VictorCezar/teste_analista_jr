/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { AddEmployeeController } from './controller/AddEmployee'
import { ChangeEmployeeController } from './controller/ChangeEmployee'
import { GetEmployeeController } from './controller/GetEmployee'
import { AddTimeCardController } from './controller/AddTimeCard'
import { ReportEmployeesController } from './controller/ReportEmployees'
import { RemoveEmployeeController } from './controller/RemoveEmployee'

const app = express()
const port = 3000

app.use(express.json())

const addEmployeeController = new AddEmployeeController()
const changeEmployeeController = new ChangeEmployeeController()
const getEmployeeController = new GetEmployeeController()
const addTimeCardController = new AddTimeCardController()
const reportEmployeesController = new ReportEmployeesController()
const removeEmployeeController = new RemoveEmployeeController()

app.post('/employees', addEmployeeController.perform)
app.put('/employees', changeEmployeeController.perform)
app.delete('/employees/:enrollment', removeEmployeeController.perform)
app.get('/employees/:enrollment', getEmployeeController.perform)
app.get('/employees/report/:date', reportEmployeesController.perform)
app.post('/employees/time-card', addTimeCardController.perform)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
