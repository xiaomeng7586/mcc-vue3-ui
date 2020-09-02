<template>
    <div>
        <Topnav />
        <div class="banner">
            <h2 class="title_h2">mcc-vue3-ui框架</h2>
            <p class="actions">
                <a class="buttons" href="https://github.com/xiaomeng7586/mcc-vue3-ui">GitHub</a>
                <router-link class="buttons" to="doc">开始</router-link>
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import Topnav from '../components/layout/Topnav.vue'
    export default {
        components:{
            Topnav
        },
        data(){
            return {
                
            }
        }
    }
</script>

<style lang="scss">
.banner {
    width: 100%;
    height:calc(100vh - 50px);
    .title_h2 {
        font-size: 50px;
        text-align: center;
        line-height: 200px;
        color:#409eff;
        text-shadow: 2px 2px 4px #000;
        user-select: none;
    }
    .actions {
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        .buttons {
            display: block;
            float: left;
            height: 50px;
            padding: 0 20px;
            border: 1px solid #409eff;
            background: #409eff;
            font-size: 24px;
            color: #fff;
            border-radius: 25px;
            margin: 0 20px;
            &:nth-child(1){
                margin-left: calc(50% - 100px);
            }
            &:nth-child(2){
                background: #fff;
                color: #409eff;
            }
        }
    }
}
</style>