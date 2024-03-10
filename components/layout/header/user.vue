<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-09 21:25:10
 * @LastEditTime: 2024-03-10 09:56:53
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\header\user.vue
-->
<template>
    <UDropdown :items="items" mode="click" :popper="{ arrow: true }">
        <UAvatar src="https://www.loliapi.com/acg/pp/" :alt="data?.name || 'Options'" />
        <!-- <UButton color="white" :label="data?.name || 'Options'" trailing-icon="i-heroicons-chevron-down-20-solid" /> -->
    </UDropdown>

</template>
<script setup>
const { data } = useAuth()
const items = [
    [{
        label: 'Profile',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
    }], [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        shortcuts: ['E'],
        click: () => {
            console.log('Edit')
        }
    }, {
        label: 'Duplicate',
        icon: 'i-heroicons-document-duplicate-20-solid',
        shortcuts: ['D'],
        disabled: true
    }], [{
        label: 'Archive',
        icon: 'i-heroicons-archive-box-20-solid'
    }, {
        label: 'Move',
        icon: 'i-heroicons-arrow-right-circle-20-solid'
    }], [{
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid',
        shortcuts: ['⌘', 'D']
    }]
]
</script>
