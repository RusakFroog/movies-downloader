<script lang="ts">
import Button from '@/components/Button.vue';
import Header from '@/components/Header/Header.vue';

export default {
    name: "Home",

    components: {
        Header,
        Button
    },
    
    data() {
        return {
            
        }
    },

    methods: {
        
    }
}
</script>

<template>    
<div class="home">
    <Header class="header" />

</div>
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;

.home {
    display: flex;
    flex-direction: column;
    
    margin-right: auto;
    margin-left: auto;
    background-color: $background-color;
    height: 100vh;
}

</style>