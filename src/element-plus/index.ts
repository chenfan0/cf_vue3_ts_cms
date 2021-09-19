import type { App } from 'vue'

import { ElButton, ElCheckbox, ElForm, ElInput, ElLink, ElTabs } from 'element-plus'

const elComponent: any[] = [ElButton, ElTabs, ElForm, ElInput, ElCheckbox, ElLink]

export default function registerElement(app: App): void {
  elComponent.forEach((item) => {
    app.use(item)
  })
}
