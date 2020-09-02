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
        </div>
    </div>
</template>

<script>
    export default {
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
        width: 100%;
        height: 50px;
        background: #409eff;
        .logo {
            float: left;
            font-size: 30px;
            line-height: 50px;
            color: #fff;
            font-weight: bold;
            text-indent: 20px;
        }
        .menu {
            float:right;
            padding-right: 30px;
            .menu_item {
                float: left;
                width: 50px;
                height: 50px;
                padding: 0 10px;
                font-size: 16px;
                line-height: 50px;
                color: #fff;
                cursor: pointer;
                transition: 0.1s ease-in;
                &.active {
                    font-size: 24px;
                    transition: 0.1s ease-out;
                }
            }
        }
    }
</style>