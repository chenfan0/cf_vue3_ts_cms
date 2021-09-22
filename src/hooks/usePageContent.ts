import { ref } from 'vue'

import PageContent from '@/components/page-content'

export function usePageContent() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  function handleResetClick() {
    ;(pageContentRef.value as any).getListData()
  }

  function handleQueryClick(queryInfo: any = {}) {
    ;(pageContentRef.value as any).getListData(queryInfo)
  }
  return [pageContentRef, handleQueryClick, handleResetClick]
}
