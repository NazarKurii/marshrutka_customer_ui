export interface NewUser {
  firstName: string
  lastName: string
  dateOfBirth: string
  phoneNumber: string
  email: string
  password: string
}

export const newUserTemplate: NewUser = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  phoneNumber: '',
  email: '',
  password: '',
}
