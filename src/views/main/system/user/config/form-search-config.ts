import { IFormType } from '@/base-ui/form/type'
export const formSearchConfig: IFormType = {
  formItems: [
    {
      field: 'id',
      label: 'id',
      type: 'input',
      placeholder: '请输入查询id'
    },
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      label: '真实姓名',
      type: 'input',
      field: 'realname',
      placeholder: '请输入真实姓名'
    },
    {
      label: '电话号码',
      type: 'input',
      field: 'cellphone',
      placeholder: '请输入手机号'
    },
    {
      field: 'enable',
      label: '状态',
      type: 'select',
      placeholder: '请选择状态',
      options: [
        {
          label: '启用',
          value: '1'
        },
        {
          label: '禁用',
          value: '0'
        }
      ]
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
