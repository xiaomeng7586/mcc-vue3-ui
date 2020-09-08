<template>
    <button class="mcc-button" :class="classes">
        <slot />
    </button>
</template>

<script lang="ts">
import { computed } from 'vue'
    export default {
        inheritAttrs:false,
        props:{
            theme:{
                type:String,
                default:"button"
            },
            size:{
                type:String,
                default:"normal"
            },
            level:{
                type:String,
                default:"normal"
            }
        },
        setup(props) {
            const { theme,size,level} = props
            const classes = computed(()=>{
                return {
                [`mcc-theme-${theme}`]:theme,
                [`mcc-size-${size}`]:size,
                [`mcc-level-${level}`]:level
                }
            })
            return { classes }
        }
    }
</script>

<style lang="scss">
$h:32px;
$border-color:#d9d9d9;
$color:#333;
$blue:#40a9ff;
$radius:4px;
.mcc-button {
    box-sizing:border-box;
    height:$h;
    padding:0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: #fff;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out($color: #000000, $amount: 0.95);
    & + & {
        margin-left: 8px;
    }
    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }
    &:focus {
        outline: none;
    }
    &::-moz-focus-inner {
        border:0;
    }
    &.mcc-theme-button {
         &.mcc-level-main {
            background: $blue;
            color: #fff;
        }
        &.mcc-level-danger {
            background: red;
            color: #fff;
        }
    }
    &.mcc-theme-link {
        border-color: transparent;
        box-shadow: none;
        color:$blue;
        &:hover,&:focus {
            color:lighten($color: #000000, $amount: 10%);
        }
        &.mcc-level-main {
            color: $blue;
        }
        &.mcc-level-danger {
            color: red;
        }
    }
    &.mcc-theme-text {
        border-color:transparent;
        box-shadow: none;
        color: inherit;
        &:hover,&:focus {
            background: darken($color: #fff, $amount: 5%);
        }
        &.mcc-level-main {
            color: $blue;
        }
        &.mcc-level-danger {
            color: red;
        }
    }
    &.mcc-size-big {
        height: $h + 6px;
        font-size: 16px;
    }
    &.mcc-size-small {
        height: $h - 6px;
        font-size: 12px;
    }
   
}
</style>