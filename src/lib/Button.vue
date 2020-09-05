<template>
    <div :size="size">
        <button v-bind="rest">
            <slot />
        </button>
    </div>
</template>

<script lang="ts">
    export default {
        inheritAttrs:false,
        props:{
            size:String
        },
        setup(props,context) {
            console.log("props",{...props})
            console.log("context",{...context})
            const {size,...rest} = context.attrs
            return {size,rest}
        }
    }
</script>