<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-13 13:55:21
 * @LastEditTime: 2024-03-13 15:05:17
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\menu\icon.vue
-->
<template>
    <div class="w-[32px] flex items-center justify-center">
        <!-- <UIcon v-if="current" :name="activeIcon || icon || 'i-tabler-point-filled'" :size="level >= 3 ? '16' : '22'"
            class="flex-shrink-0" /> -->
        <UIcon :name="icon" :size="level >= 3 ? '16' : '22'" class="flex-shrink-0" />
    </div>

</template>
<script setup>
const props = defineProps({
    icon: {
        type: String,
        default: 'i-tabler-point'
    },
    // activeIcon: {
    //     type: String,
    //     default: ''
    // },
    level: {
        type: Number,
        default: 1
    },
    current: {
        type: Boolean,
        default: false
    }
})
</script>
