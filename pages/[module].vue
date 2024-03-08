<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:18:04
 * @LastEditTime: 2024-03-08 15:01:18
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\[module].vue
-->

<template>
    <div class="border p-4 m-4">
        <div>
            <template v-for="route in userStore.routes">
                <ULink v-if="(route?.__type !== 'action')" :to="route.path" class="mx-4">
                    [{{ route.name }}]
                </ULink>
            </template>
        </div>
        <p>moduleInfo: {{ moduleInfo }}</p>
        <hr>
        <NuxtPage />
    </div>
</template>

<script setup>
const route = useRoute()
const userStore = useUserStore()

const { module } = route.params

const moduleInfo = computed(() => {
    return userStore.routes.find(route => route.route === `${module}`)
})
provide('moduleInfo', moduleInfo)

</script>
