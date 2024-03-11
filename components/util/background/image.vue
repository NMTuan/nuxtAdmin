<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-08 20:16:27
 * @LastEditTime: 2024-03-08 20:45:56
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\util\background\image.vue
-->
<template>
    <div :style="style">
        <slot />
    </div>
</template>
<script setup>
import trianglify from '@victorioberra/trianglify-browser'

const color = useColor()
const colorMode = useColorMode()

const handlerColor = (shades, c) => {
    if (colorMode.value !== 'dark') {
        return color(shades, c)
    } else {
        // dark 模式下翻转一下颜色和色调
        if (shades === 'white') {
            return color('black')
        } else if (shades === 'black') {
            return color('white')
        } else {
            return color(1000 - shades, c)
        }
    }
}

const style = computed(() => {
    const x = 40
    const pattern = trianglify({
        cellSize: Math.random() * x + x,
        width: 1920,
        height: 1080,
        variance: 32,
        xColors: [handlerColor(50, 'gray')],
        yColors: [handlerColor('white'), handlerColor('white'), handlerColor(100), handlerColor(200)],
        seed: null
    }).toCanvas()
    const triangle = pattern.toDataURL('image/png')
    const backgroundImage = `url('${triangle}')`

    return {
        backgroundImage: backgroundImage
    }
})

</script>
