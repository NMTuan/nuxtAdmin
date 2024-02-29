<template>
    <div>list</div>
    <p v-for="item in data">
        {{ item }}
        <UButton v-for="action in pageStore.actions" :to="pageStore.handlerActionTo(item, action)">{{ action.label }}
        </UButton>
    </p>
    <p v-for="item in pageStore.actions">{{ item }}</p>
    <NuxtPage />
</template>
<script setup>
const pageStore = usePageStore()
const data = [
    { id: 1001, name: 'Ethan Doyle', sex: 1 },
    { id: 1002, name: 'Mason Valdez', sex: 2 },
    { id: 1003, name: 'Virginia Blake', sex: 1 },
    { id: 1004, name: 'Kevin Rose', sex: 2 },
    { id: 1005, name: 'Carlos Chambers', sex: 1 },
    { id: 1006, name: 'Lillie King', sex: 1 },
    { id: 1007, name: 'Zachary Owens', sex: 2 },
    { id: 1008, name: 'Lelia Reynolds', sex: 2 },
    { id: 1009, name: 'Viola Haynes', sex: 1 },
    { id: 1010, name: 'Alta Chavez', sex: 1 },
    { id: 1011, name: 'Harriett Mills', sex: 1 },
]

</script>
