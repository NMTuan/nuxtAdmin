<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-07 17:05:47
 * @LastEditTime: 2024-03-12 12:23:43
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\action\slideover.vue
-->

<template>
    <USlideover :model-value="isOpen" @close="handlerClose">
        <slot></slot>
        <input type="text" class="opacity-0 h-0 overflow-hidden" />
    </USlideover>
</template>

<script setup>
const actionBack = inject('actionBack')

const isOpen = ref(true)

const handlerClose = () => {
    actionBack()
}




</script>
