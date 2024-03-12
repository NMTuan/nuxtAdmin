<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-07 16:54:59
 * @LastEditTime: 2024-03-12 12:23:06
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\action\model.vue
-->

<template>
    <UModal :model-value="isOpen" @close="handlerClose">
        <slot></slot>
        <input type="text" class="opacity-0 h-0 overflow-hidden" />
    </UModal>
</template>

<script setup>

const actionBack = inject('actionBack')

const isOpen = ref(true)

const handlerClose = () => {
    actionBack()
}




</script>
