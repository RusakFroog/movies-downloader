<script lang="ts">
export default {
    name: "HeaderComponent",
    
    props: {
        title: {
            type: String,
            required: true,
        },

        route: {
            type: String,
            required: false,
            default: null
        }
    },

    methods: {
        onClick() {
            if (this.route) {
                this.$router.push({ name: this.route });
            }
        }
    },
};
</script>

<template>
<div class="component">
    {{ title }} 
</div>
</template>


<style scoped lang="scss">
@use '../../styles/variables' as *;

.component {
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    transition: all 0.3s;

    font-size: 35px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    color: $font-color;
    
    background-image: linear-gradient(to right, #6675EB 0%, #74B2F9 50%, #562ADA 100%);
    background-clip: text;
    -webkit-background-clip: text;
    
    &:hover {
        color: rgba(0, 0, 0, 0);
    }
}

@media (max-width: 1300px) {
    .component {
        font-size: 24px;
    }
}
</style>