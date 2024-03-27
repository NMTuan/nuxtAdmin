<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-26 11:40:42
 * @LastEditTime: 2024-03-26 14:38:45
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\com\form\wangEditor.vue
-->
<template>
    <ClientOnly>
        <div class="formWangEditor">
            <Toolbar :editor="editorRef" class="border-b dark:border-b-gray-700" :defaultConfig="toolbarConfig"
                :mode="field.mode || 'default'" />
            <Editor class="overflow-y" :style="{ height: field.height || '300px' }" v-model="formData[field.key]"
                :defaultConfig="editorConfig" :mode="field.mode || 'default'" @onCreated="handleCreated" />
        </div>
    </ClientOnly>
</template>
<script setup>
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const field = inject('field')
const formData = inject('formData')


// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()


const handleCreated = (editor) => {
    editorRef.value = editor // 记录 editor 实例，重要！
}

const toolbarConfig = computed(() => {
    if (field.toolbarConfig) {
        return field.toolbarConfig
    }
    return {}
})
const editorConfig = computed(() => {
    if (field.editorConfig) {
        return field.editorConfig
    }
    return { placeholder: field.placeholder || '' }
})
</script>
<style lang="scss">
.formWangEditor {
    @apply relative block w-full focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400;
    @apply p-0;
    @apply disabled:cursor-not-allowed disabled:opacity-75;

    .w-e-toolbar,
    .w-e-text-container {
        @apply bg-transparent;
    }

    .w-e-bar-divider {
        @apply dark:bg-gray-700;
    }
}
</style>
