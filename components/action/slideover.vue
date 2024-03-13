<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-07 17:05:47
 * @LastEditTime: 2024-03-13 16:32:11
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\action\slideover.vue
-->

<template>
    <USlideover :model-value="isOpen" @close="actionBack">
        <slot></slot>
        <input type="text" class="opacity-0 h-0 overflow-hidden" />
    </USlideover>
</template>

<script setup>
const actionBack = inject('actionBack')

const isOpen = ref(true)

</script>
