import type { App } from 'vue'

import {
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElInput,
  ElLink,
  ElMenu,
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
  ElMenu
]

export default function registerElement(app: App): void {
  elComponent.forEach((item) => {
    app.use(item)
  })
}
