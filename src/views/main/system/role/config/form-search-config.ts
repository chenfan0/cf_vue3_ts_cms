import { IFormType } from '@/base-ui/form/type'
export const formSearchConfig: IFormType = {
  formItems: [
    {
      field: 'name',
      label: '职位名称',
      type: 'input',
      placeholder: '请输入职位名称'
    },
    {
      field: 'createAt',
      label: '创建时间',
      type: 'datePicker',
      otherOptions: {
        type: 'daterange',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期'
      }
    }
  ]
}
