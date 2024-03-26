<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-11 13:46:54
 * @LastEditTime: 2024-03-14 13:58:16
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\com\form\input.vue
-->
<template>
    <UTextarea v-bind="field" v-model="formData[field.key]" autocomplete="off" />
</template>
<script setup>
const field = inject('field')
const formData = inject('formData')
</script>
