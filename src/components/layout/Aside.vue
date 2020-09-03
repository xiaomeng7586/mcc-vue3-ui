<template>
    <div>
        <aside :class="[{'hide':!menuVisible}]">
            <h2>组件列表</h2>
            <ul>
                <li>
                    <router-link to="/doc/swich">Swich 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/button">Button 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/dialog">Dialog 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/tabs">Tabs 组件</router-link>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue"
export default {
    setup(){
        const menuVisible = inject<Ref<boolean>>("menuVisible")
        console.log("Aside :"+menuVisible.value)
        return { menuVisible }
    },
}
</script>

<style lang="scss" scoped>
    aside {
        width: 200px;
        height: calc(100vh - 50px);
        position: fixed;
        left: 0;
        top: 50px;
        border-right: 1px solid rgb(173, 169, 169);
        transition:0.3s ease-in-out;
        &.hide {
            left: -200px;
            transition:0.3s ease-in-out;
        }
    }
</style>