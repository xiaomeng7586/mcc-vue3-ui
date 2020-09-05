<template>
    <div>
        <h4>示例</h4>
        <br>
        <Button>我是按钮1</Button>
        <Button theme="button">我是按钮2</Button>
        <Button theme="link">我是按钮3</Button>
        <Button theme="text">我是按钮4</Button>
    </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
    export default {
        components:{
            Button
        },
    }
</script>