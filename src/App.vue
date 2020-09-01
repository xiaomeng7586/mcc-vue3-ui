<template>
<div>导航栏 |
    <router-link to="/">Frank</router-link>
    |
    <router-link to="/frank2">frank2</router-link>
</div>
<hr>
<router-view />
</template>

<script>
import Frank from './components/Frank.vue'

export default {
    name: 'App',
}
</script>
