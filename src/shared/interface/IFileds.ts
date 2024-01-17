export interface IFieldsReg {
  name: string
  password: string
  emailAddress: string
  passwordConfirm: string
}

export type IFieldsAuth = Omit<IFieldsReg, "name" | "passwordConfirm">
