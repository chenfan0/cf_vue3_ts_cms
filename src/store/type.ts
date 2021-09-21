import { ILoginStateType } from './login/type'
import { ISystemType } from './main/system/type'

export interface IRootStateType {
  name: string
  login?: ILoginStateType
  system?: ISystemType
}
