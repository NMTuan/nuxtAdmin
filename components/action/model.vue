<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-07 16:54:59
 * @LastEditTime: 2024-03-07 18:05:10
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\action\model.vue
-->

<template>
    <UModal :model-value="isOpen" @close="handlerClose">
        <slot></slot>
    </UModal>
</template>

<script setup>

const actionBack = inject('actionBack')

const isOpen = ref(true)

const handlerClose = () => {
    actionBack()
}




</script>
