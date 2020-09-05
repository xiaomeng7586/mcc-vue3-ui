<template>
    <div>
        <h1>示例1</h1>
        <Button @click="clickButton" @mouseover="clickButton" @focus="clickButton" :size="'simple'">我是按钮</Button>
    </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
    export default {
        components:{
            Button
        },
        setup(props,context){
            const clickButton =()=>{
                console.log("buttons")
            }
            return { clickButton }
        }
    }
</script>