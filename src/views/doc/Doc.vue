<template>
    <div>
        <Topnav />
        <div class="content">
            <Aside />
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../../components/layout/Topnav.vue'
import Aside from '../../components/layout/Aside.vue'
export default {
    components:{
        Topnav,
        Aside
    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .content {
        display: flex;
        width:calc(100% - 220px);
        min-height: calc(100vh - 70px);
        margin-left: 210px;
        margin-top: 10px;
        main {
            border-radius: 4px;
            width:100%;
            padding: 10px;
        }
    }
    @media (max-width:500px) {
        .content {
            width:100%;
            margin-left: 0px;
        }
    }
</style>