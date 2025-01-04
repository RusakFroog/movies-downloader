<script lang="ts">
import { PropType } from 'vue';

declare global {
    type TypeInputItem = { 
        id: string,
        title: string,
        onClick: () => void,
        image?: string,
        hideFromList?: boolean
    };
}

export default {
    name: "InputItem",

    props: {
        title: {
            type: String,
            required: true
        },

        onClick: {
            type: Function as PropType<(event: MouseEvent) => void>,
            require: true
        },

        image: {
            type: String,
            required: false
        }
    },

    computed: {
        getMarginRight() {
            return this.title === "" ? "auto" : "5px";
        },

        getMarginLeft() {
            return this.title === "" ? "auto" : "0px";
        }
    }
}
</script>

<template>
<div class="item" @click="onClick">
    <img v-if="image" :src="image" width="30">{{ title }}
</div>
</template>

<style scoped lang="scss">
.item {
    display: flex;
    align-items: center;

    transition: all 0.3s;

    img {
        margin-right: v-bind(getMarginRight);
        margin-left: v-bind(getMarginLeft);
    }
}
</style>