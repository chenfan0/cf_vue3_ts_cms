type FormItemType = 'input' | 'select' | 'password' | 'datePicker'

export interface IFormItemDataType {
  label: string
  type: FormItemType
  rules?: any
  placeholder?: string
  options?: any[]
  otherOptions?: any
}

export interface IFormType {
  formItems: IFormItemDataType[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
