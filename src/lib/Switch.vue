<template>
    <button class="mcc-switch" :class="{'mcc-checked':value}" @click="toggle"><span></span></button>
</template>

<script lang="ts">
import { ref } from 'vue'
    export default {
        props:{
            value:Boolean
        },
        setup(props,context){
            const toggle = () =>{
                context.emit("update:value",!props.value)
            }
            return {toggle}
        }
    }
</script>

<style lang="scss">
$h:22px;
$h2:$h - 4px;
.mcc-switch {
    height: $h;
    width: $h*2;
    border: none;
    background: #dcdfe6;
    border-radius: $h/2;
    position: relative;
    outline: none;
    cursor: pointer;
    span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: #fff;
        border-radius: $h2 / 2;
        transition: left 0.25s linear;
    }
    &.mcc-checked  {
        background: #409eff;
        >span {
            left: calc(100% - 20px);
        }
    }
}
</style>