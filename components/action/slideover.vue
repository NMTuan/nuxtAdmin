<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-07 17:05:47
 * @LastEditTime: 2024-03-07 18:06:45
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\action\slideover.vue
-->

<template>
    <USlideover :model-value="isOpen" @close="handlerClose">
        <slot></slot>
    </USlideover>
</template>

<script setup>
const actionBack = inject('actionBack')

const isOpen = ref(true)

const handlerClose = () => {
    actionBack()
}




</script>
