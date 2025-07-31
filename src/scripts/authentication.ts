import type { Router } from 'vue-router'
import { Problem } from './errors'

export interface NewUser {
  firstName: string
  lastName: string
  dateOfBirth: string
  phoneNumber: string
  email: string
  password: string
}

export interface NewUserDataViolation {
  firstName: boolean
  lastName: boolean
  dateOfBirth: boolean
  phoneNumber: boolean
  email: boolean
  password: boolean
}

export const newUserTemplate: NewUser = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  phoneNumber: '',
  email: '',
  password: '',
}

export function validate(user: NewUser): { violation: NewUserDataViolation; isValid: boolean } {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/

  const violation: NewUserDataViolation = {
    firstName: user.firstName.trim().length === 0,
    lastName: user.lastName.trim().length === 0,
    dateOfBirth: user.dateOfBirth.trim().length === 0,
    phoneNumber: user.phoneNumber.trim().length === 0,
    email: !emailRegex.test(user.email),
    password: !passwordRegex.test(user.password),
  }

  const isValid = !Object.values(violation).some((v) => v)

  return { violation, isValid }
}

export interface InvalidParams {
  firstName: boolean
  lastName: boolean
  dateOfBirth: boolean
  phoneNumber: boolean
  password: boolean
  emailToken: boolean
}

export function identifyInvalidParams(problem: Problem): InvalidParams {
  const params = {
    firstName: false,
    lastName: false,
    dateOfBirth: false,
    phoneNumber: false,
    password: false,
    emailToken: false,
  }
  if (problem.invalidParams) {
    for (const param of problem.invalidParams) {
      if (param.name in params) {
        params[param.name as keyof InvalidParams] = true
      }
    }
  }

  return params
}

// export function singup(user: NewUser, router: Router):string{
//   try{
// const {data}:{data:{
//   token: string
// }} = await axios.post()
//   }catch(err){
//     const problem = new Problem(err, router)
//     console.log(problem)
//     return problem.detail
//   }
// }
