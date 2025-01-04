<script lang="ts">
import InputItem from '../InputSelect/InputItem.vue';
import { changeLanguage } from 'i18next';

export default {
    name: "ChangeLanguage",

    components: {
        InputItem
    },

    data() {
        return {
            isOpen: false,
            items: [ 
                { id: "image", title: '', image: '/icons/language.png', hideFromList: true, onClick: () => true },
                { id: "en", title: 'English', onClick: () => changeLanguage('en') },
                { id: "ru", title: 'Русский', onClick: () => changeLanguage('ru') },
            ] as TypeInputItem[],
        }
    },

    methods: {
        changeItem(item: TypeInputItem) {
            this.isOpen = false;

            changeLanguage(item.id);
        }
    }
}
</script>

<template>
<div class="input-select" @mouseover="() => isOpen = true" @mouseleave="() => isOpen === true ? isOpen = false : null">
    <div class="button">
        <img src="../../assets/icons/language.png" width="25">
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
    
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.input-select {
    display: flex;
    position: relative;
    width: 50px;
    height: 50px;

    .button {
        display: flex;
        align-items: center;

        cursor: pointer;
        color: white;
        width: 100%;
        height: 100%;
        padding-left: 10px;

        user-select: none;

        font-size: 24px;
        font-weight: 500;
        
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
    }

    .list {
        position: absolute;
        top: 100%;
        left: -20px;
        width: 100%;
        overflow-y: auto;
        animation: dropdownAnimation 0.3s ease;
        
        max-height: 200px;
        min-width: fit-content;

        background-color: $accent-color;
        
        z-index: 11;
        
        .item {
            color: white;
            cursor: pointer;
            
            font-size: 18px;
            font-weight: 400;

            width: 100%;
            padding: 8px;
    
            &:hover {
                background-color: $divider-color;
            }
        }
    }

}
</style>