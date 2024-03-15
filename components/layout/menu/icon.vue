<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-13 13:55:21
 * @LastEditTime: 2024-03-13 15:26:22
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\menu\icon.vue
-->
<template>
    <div class="w-[32px] flex items-center justify-center">
        <UIcon :name="icon" size="22" class="flex-shrink-0" />
    </div>

</template>
<script setup>
const props = defineProps({
    icon: {
        type: String,
        default: 'i-tabler-point'
    },
    current: {
        type: Boolean,
        default: false
    }
})
</script>
