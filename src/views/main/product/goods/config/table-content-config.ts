import { ITableContentConfig } from '@/components/page-content'

export const tableContentConfig: ITableContentConfig = {
  title: '用户列表',
  propList: [
    {
      prop: 'name',
      label: '商品名称',
      minWidth: '100'
    },
    {
      prop: 'oldPrice',
      label: '原价',
      minWidth: '40'
    },
    {
      prop: 'newPrice',
      label: '现价',
      minWidth: '40'
    },
    {
      prop: 'desc',
      label: '商品描述',
      minWidth: '100'
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      minWidth: '100'
    },
    {
      prop: 'saleCount',
      label: '销量',
      minWidth: '100'
    },
    {
      prop: 'favorCount',
      label: '收藏',
      minWidth: '100'
    },
    {
      prop: 'address',
      label: '地址',
      minWidth: '100'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '180'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '180'
    },
    {
      prop: 'operation',
      label: '操作',
      minWidth: '100'
    }
  ],
  showIndex: true
}
