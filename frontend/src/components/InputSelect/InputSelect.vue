<script lang="ts">
import InputItem from './InputItem.vue';
import { PropType } from 'vue';

export default {
    name: "InputSelect",

    components: {
        InputItem
    },

    props: {
        items: {
            type: Array<TypeInputItem>,
            required: true,
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

        itemFontSize: {
            type: String,
            required: false,
            default: "16px"
        },

        itemFontWeight: {
            type: Number,
            required: false,
            default: 400
        },

        onClickItem: {
            type: Function as PropType<(item: TypeInputItem, event: MouseEvent) => void>,
            required: false
        },

        showArrow: {
            type: Boolean,
            required: false,
            default: true
        },

        // Callback to get Title element for list
        firstItem: {
            type: Function as PropType<(items: Array<TypeInputItem>) => TypeInputItem | null>,
            required: false
        },

        // Is item will apply to Title item
        changeTitleItem: {
            type: Boolean,
            required: false,
            default: true
        }
    },

    data() {
        return {
            isOpen: false,
            currentItem: this.items[0] as TypeInputItem,
        }
    },

    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },

        changeItem(item: TypeInputItem) {
            if (this.changeTitleItem) {
                this.currentItem = item;
            }
            
            this.isOpen = false;

            if (this.onClickItem) {
                this.onClickItem(item, new MouseEvent('click'));
            }
        }
    },

    mounted() {
        if (this.firstItem) {
            this.currentItem = this.firstItem(this.items) ?? this.items[0];
        } else {
            this.currentItem = this.items[0];
        }
    }
}
</script>

<template>
<div class="input-select">
    <div class="button" @click="toggleDropdown">
        <img v-if="currentItem.image" :src="currentItem.image" width="35" style="margin-right: 5px;">{{ currentItem.title }}
        <img v-if="showArrow" class="arrow" src="../../assets/icons/arrow.svg" :class="isOpen ? 'down' : 'up'">    
    </div>
    
    <div v-if="isOpen" class="list">
        <div v-for="item in items.filter(x => !x.hideFromList)" @click="changeItem(item)">
            <InputItem
                :image="item.image"
                :title="item.title"
                :onClick="item.onClick"
                class="item"
            />
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

@keyframes dropdownAnimation {
    0% {
        opacity: 0;
        transform: translateY(-5px);
    }
    
    100%{
        opacity: 1;
        transform: translateY(0);
    }
}

.input-select {
    display: flex;
    position: relative;
    width: v-bind(width);
    height: v-bind(height);
    min-width: fit-content;

    .button {
        display: flex;
        align-items: center;
        max-width:max-content;

        cursor: pointer;
        color: white;
        width: 100%;
        height: 100%;
        padding-left: 10px;
        padding-right: 10px;

        user-select: none;

        font-size: v-bind(fontSize);
        font-weight: v-bind(fontWeight);
        
        background-color: white;
        background-image: linear-gradient($accent-color, $accent-color),
                          linear-gradient(to right, #562ADA 0%, #74B2F9);
        background-origin: border-box;
        background-clip: padding-box, border-box;

        border: 3px solid transparent;
        border-radius: 5px;

        &:hover {
            background-image: linear-gradient($divider-color, $divider-color),
                              linear-gradient(to right, #562ADA 0%, #74B2F9);
        }

        .arrow {
            transition: all 0.3s ease;
            margin-left: auto;

            &.down {
                transform: rotateZ(180deg);
            }
        }
    }

    .list {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        overflow-y: auto;
        animation: dropdownAnimation 0.3s ease;
        margin-top: 2px;
        
        max-height: 200px;
        min-width: fit-content;

        font-size: v-bind(itemFontSize);
        font-weight: v-bind(itemFontWeight);

        background-color: $accent-color;
        
        z-index: 10;
        
        .item {
            color: white;
            font-weight: 500;
            cursor: pointer;
            
            width: 100%;
            padding: 8px;
    
            &:hover {
                background-color: $divider-color;
            }
        }
    }

}
</style>