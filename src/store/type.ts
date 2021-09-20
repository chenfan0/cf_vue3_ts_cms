import { ILoginStateType } from './login/type'

export interface IRootStateType {
  name: string
  login?: ILoginStateType
}
