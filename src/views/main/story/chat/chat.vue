<template>
  <div class="chat">
    <hy-editor v-model:value="htmlString" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyEditor from '@/base-ui/editor'
export default defineComponent({
  components: {
    HyEditor
  },

  setup() {
    const htmlString = ref<string>('cf')
    return {
      htmlString
    }
  }
})
</script>

<style lang="less" scoped>
.chat {
  padding-top: 30px;
}
</style>
