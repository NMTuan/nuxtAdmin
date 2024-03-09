<template>
    <div class="flex items-center px-4 py-3 text-zinc-500 dark:text-zinc-400">
        <div class="text-xs font-bold hidden xl:block">
            {{ item?.label }}
        </div>
        <UDivider class="show xl:hidden" />
    </div>
</template>
<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => { }
    }
})
</script>
