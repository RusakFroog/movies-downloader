<script lang="ts">
export default {
    name: 'Button',

    props: {
        title: {
            type: String,
            required: true
        },

        width: {
            type: String,
            required: false,
            default: "200px"
        },

        height: {
            type: String,
            required: false,
            default: "70px"
        },

        fontSize: {
            type: String,
            required: false,
            default: "24px"
        },

        fontWeight: {
            type: Number,
            required: false,
            default: 500
        },

        empty: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    computed: {
        getBackground(): string {
            return this.empty ? "#1E1E1E1E" : "linear-gradient(to right, #562ADA, #74B2F9)";
        }
    },
};
</script>

<template>
    <button v-if="!empty">
        {{ title }}
    </button>

    <button v-else id="empty-button">
        {{ title }}
    </button>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;

button {
    cursor: pointer;
    text-align: center;
    transition: all 0.2s ease;
    
    color: $button-font-color;

    background: linear-gradient(to right, #562ADA 0%, transparent) #74B2F9;

    width: v-bind(width);
    height: v-bind(height);
    font-size: v-bind(fontSize);
    font-weight: v-bind(fontWeight);
    
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: #47f8f8;
        color: black;
    }
}

#empty-button {
    cursor: pointer;
    text-align: center;
    transition: all 0.2s ease;

    color: $button-font-color;

    background-color: $accent-color;
    background-image: linear-gradient($accent-color, $accent-color),
                      linear-gradient(to right, #562ADA 0%, #74B2F9);
    background-origin: border-box;
    background-clip: padding-box, border-box;

    width: v-bind(width);
    height: v-bind(height);
    font-size: v-bind(fontSize);
    font-weight: v-bind(fontWeight);
    
    border: 3px solid transparent;
    border-radius: 5px;

    &:hover {
        color: black;
        background-image: linear-gradient(to right, #562ADA 0%, #74B2F9);
        border-color: transparent;
        background-clip: border-box;
    }
}
</style>