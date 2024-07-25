import { Pool } from 'pg'
import { Request, Response } from 'express'

const dbServer = process.env.POSTGRES_DB
const dbPassword = process.env.POSTGRES_PASSWORD

console.log(`Create pool with defaults: server='${dbServer}'`)
const pool = new Pool({
  host: dbServer,
  database: 'postgres',
  user: 'postgres',
  password: dbPassword,
  port: 5432,
  max: 10,
  idleTimeoutMillis: 60000,
  connectionTimeoutMillis: 10000,
})

export const getTeachers = async (_: Request, response: Response) => {
  console.log('getTeachers')

  try {
    // todo
    response.status(404).json({ message: 'TODO: getTeachers' })
  } catch (error) {
    console.log('Error thrown in getTeachers: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}

export const getTeacherById = async (_: Request, response: Response) => {
  console.log('getTeacherById')

  try {
    // todo
    response.status(404).json({ message: 'TODO: getTeacherById' })
  } catch (error) {
    console.log('Error thrown in getTeacherById: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}

export const createTeacher = async (request: Request, response: Response) => {
  console.log('createTeacher: body=', request.body)

  try {
    // todo
    response.status(404).json({ message: 'TODO: createTeacher' })
  } catch (error) {
    console.log('Error thrown in createTeacher: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}

export const updateTeacher = async (request: Request, response: Response) => {
  console.log('updateTeacher: body=', request.body)

  try {
    // todo
    response.status(404).json({ message: 'TODO: updateTeacher' })
  } catch (error) {
    console.log('Error thrown in updateTeacher: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}

export const deleteTeacher = async (_: Request, response: Response) => {
  console.log('deleteTeacher')

  try {
    // todo
    response.status(404).json({ message: 'TODO: deleteTeacher' })
  } catch (error) {
    console.log('Error thrown in deleteTeacher: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}
