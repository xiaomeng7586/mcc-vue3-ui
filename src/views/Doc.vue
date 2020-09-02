<template>
    <div>
        <Topnav />
        <div class="content">
            <Aside />
            <main>主内容</main>
        </div>
    </div>
</template>

<script>
import Topnav from '../components/layout/Topnav.vue'
import Aside from '../components/layout/Aside.vue'
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