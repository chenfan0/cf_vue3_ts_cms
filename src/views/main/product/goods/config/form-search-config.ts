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
      label: '商品名称',
      type: 'input',
      placeholder: '商品名称'
    },
    {
      label: '商品状态',
      type: 'select',
      field: 'status',
      placeholder: '请选择商品状态',
      options: [
        {
          label: '正常',
          value: '1'
        },
        {
          label: '禁止',
          value: '0'
        }
      ]
    },
    {
      field: 'address',
      label: '地址',
      type: 'input',
      placeholder: '请输入地址'
    }
  ]
}
