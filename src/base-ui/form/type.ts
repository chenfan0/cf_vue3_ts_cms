type FormItemType = 'input' | 'select' | 'password' | 'datePicker'
export type FieldType = 'id' | 'select' | 'password' | 'createTime' | 'userName'
export interface IFormItemDataType {
  field: FieldType
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
