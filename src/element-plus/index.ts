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
  ElInput,
  ElLink,
  ElMenu,
  ElRow,
  ElSelect,
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
  ElBreadcrumb
]

export default function registerElement(app: App): void {
  elComponent.forEach((item) => {
    app.use(item)
  })
}
