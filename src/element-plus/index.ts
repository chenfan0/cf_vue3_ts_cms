import type { App } from 'vue'

import {
  ElAvatar,
  ElBreadcrumb,
  ElButton,
  ElCheckbox,
  ElCol,
  ElContainer,
  ElDatePicker,
  ElDropdown,
  ElForm,
  ElImage,
  ElInput,
  ElLink,
  ElMenu,
  ElPagination,
  ElRow,
  ElSelect,
  ElTable,
  ElTabs
} from 'element-plus'

const elComponent: any[] = [
  ElButton,
  ElTabs,
  ElForm,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElMenu,
  ElAvatar,
  ElDropdown,
  ElRow,
  ElCol,
  ElDatePicker,
  ElSelect,
  ElBreadcrumb,
  ElTable,
  ElPagination,
  ElImage
]

export default function registerElement(app: App): void {
  elComponent.forEach((item) => {
    app.use(item)
  })
}
