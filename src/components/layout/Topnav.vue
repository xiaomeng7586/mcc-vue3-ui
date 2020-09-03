<template>
    <div>
        <div class="topnav">
            <div class="logo">mcc-vue3-ui</div>
            <div class="menu">
                <div 
                :class="['menu_item',{'active':activeIndex == index}]"
                v-for="(item,index) in menuList"
                :key="index"
                @click="changeActive(index)"
                >
                    <span >{{item.title}}</span>
                </div>
            </div>
            <div class="toggles" @click="toggleMenu"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
    export default {
        setup(){
            const menuVisible = inject<Ref<boolean>>("menuVisible")
            console.log("topnav :"+menuVisible.value)
            const toggleMenu = ()=>{
                menuVisible.value = !menuVisible.value
            }
            return { 
                toggleMenu
            }
        },
        data(){
            return {
                activeIndex:0,
                menuList:[
                    {
                        title:"指南",
                        url:""
                    },
                    {
                        title:"组件",
                        url:""
                    },
                    {
                        title:"主题",
                        url:""
                    }
                ]
            }
        },
        methods:{
            changeActive(index){
                this.activeIndex = index
            }
        }
    }
</script>

<style lang="scss" scoped>
    .topnav {
        display:flex;
        height: 50px;
        position: relative;
        padding: 0 30px;
        background: #409eff;
        z-index: 10;
        .logo {
            font-size: 30px;
            color: #fff;
            font-weight: bold;
            max-width: 6em;
            margin-right: auto;
            line-height: 50px;
        }
        .menu {
            display:flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            .menu_item {
                font-size: 16px;
                line-height: 50px;
                width: 70px;
                color: #fff;
                cursor: pointer;
                transition: 0.1s ease-in;
                &.active {
                    font-size: 24px;
                    line-height: 50px;
                    transition: 0.1s ease-out;
                }
            }
        }
        .toggles {
            width: 30px;
            height: 30px;
            background: #fff;
            position: absolute;
            left: 10px;
            top: 10px;
            cursor: pointer;
            display: none;
            overflow: hidden;
            &:before {
                content: "";
                width: 30px;
                height: 30px;
                position: absolute;
                left: 0;
                top: 0;
                background: #409eff;
                transform: rotateZ(45deg);
            }
            &:after {
                content: "";
                width: 16px;
                height: 16px;
                position: absolute;
                left: 7px;
                top: 7px;
                background: #fff;
                transform: rotateZ(45deg);
            }
        }
        @media (max-width: 500px) {
            > .menu {
                display: none;
            } 
            > .logo {
                margin: 0 auto;
            }
            > .toggles {
                display: block;
            }
        }
    }
</style>