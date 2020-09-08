<template>
    <div>
        <h4>示例1</h4>
        <br>
        <Button>我是按钮1</Button>
        <Button theme="button">我是按钮2</Button>
        <Button theme="link">我是按钮3</Button>
        <Button theme="text">我是按钮4</Button>
        <h4>示例2</h4>
        <br>
        <Button size="big">我是按钮1</Button>
        <Button>我是按钮2</Button>
        <Button size="small">我是按钮3</Button>
        <br>
        <Button theme="link" size="big">我是按钮1</Button>
        <Button theme="link">我是按钮2</Button>
        <Button theme="link" size="small">我是按钮3</Button>
        <br>
        <Button theme="text" size="big">我是按钮1</Button>
        <Button theme="text">我是按钮2</Button>
        <Button theme="text" size="small">我是按钮3</Button>
        <h4>示例3</h4>
        <br>
        <Button level="main">我是按钮1</Button>
        <Button>我是按钮2</Button>
        <Button level="danger">我是按钮3</Button>
        <br>
        <Button level="main" theme="link">我是按钮1</Button>
        <Button theme="link">我是按钮2</Button>
        <Button level="danger" theme="link">我是按钮3</Button>
        <br>
        <Button level="main" theme="text">我是按钮1</Button>
        <Button theme="text">我是按钮2</Button>
        <Button level="danger" theme="text">我是按钮3</Button>
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

<style lang="scss" scoped>
    h4 {
        margin-top: 20px;
    }
</style>