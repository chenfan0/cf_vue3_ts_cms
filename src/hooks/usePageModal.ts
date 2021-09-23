import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type callBackFn = (param?: any) => void

export function usePageModal(newCb?: callBackFn, editCb?: callBackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  function handleEditClick(data: any) {
    pageModalRef.value.modalData = { ...data }

    editCb && editCb()
    ;(pageModalRef.value as any).dialogVisible = true
  }

  function handleNewClick() {
    pageModalRef.value.modalData = {}
    newCb && newCb()
    ;(pageModalRef.value as any).dialogVisible = true
  }
  return [pageModalRef, handleEditClick, handleNewClick]
}
