import { IFormType } from '@/base-ui/form/type'
export const formItems: IFormType = {
  formItems: [
    {
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      label: '密码',
      type: 'password',
      placeholder: '请输入密码'
    },
    {
      label: '创建时间',
      type: 'datePicker',
      otherOptions: {
        type: 'daterange',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期'
      }
    },
    {
      label: '请选择',
      type: 'select',
      placeholder: '请选择',
      options: [
        {
          label: '篮球',
          value: 'basketball'
        },
        {
          label: '足球',
          value: 'football'
        }
      ]
    }
  ]
}
