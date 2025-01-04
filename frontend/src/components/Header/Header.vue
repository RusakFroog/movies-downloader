<script lang="ts">
import HeaderComponent from './HeaderComponent.vue';
import Button from '../Button.vue';
import ChangeLanguage from '../Language/ChangeLanguage.vue';

export default {
    name: "Header",

    components: {
        HeaderComponent,
        Button,
        ChangeLanguage
    },

    data() {
        return {
            selectedElementId: 0,
        }
    },

    methods: {
        selectElement(id: number) {
            this.selectedElementId = id;

            localStorage.setItem("header_selectedElementId", this.selectedElementId.toString());
        },

        toHome() {
            this.$router.push({ name: 'home' });
        }
    },

    mounted() {
        this.selectedElementId = parseInt(localStorage.getItem("header_selectedElementId") || "0");
    }
};
</script>

<template>
<div class="header">
    <Button class="logo" :empty="true" title="LOGOTYPE" height="52px" width="180px" fontSize="24px" />

    <section class="components">
        <HeaderComponent @click="selectElement(0)" :class="selectedElementId === 0 ? 'active' : ''" :title="$t('components.header.movies')"  />
        <HeaderComponent @click="selectElement(1)" :class="selectedElementId === 1 ? 'active' : ''" :title="$t('components.header.series')" />
        <HeaderComponent @click="selectElement(2)" :class="selectedElementId === 2 ? 'active' : ''" :title="$t('components.header.dramas')" />
        <HeaderComponent @click="selectElement(3)" :class="selectedElementId === 3 ? 'active' : ''" :title="$t('components.header.actions')" />
        <HeaderComponent @click="selectElement(4)" :class="selectedElementId === 4 ? 'active' : ''" :title="$t('components.header.comedies')" />
    </section>
    
    <Button class="sign-in" :empty="true" :title="$t('components.header.signIn')" height="52px" width="130px" fontSize="24px" />
    
    <ChangeLanguage class="lang" />
</div>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

$third-linear-gradient: linear-gradient(to right, #6675EB 0%, #74B2F9 50%, #562ADA 100%);

.header {
    display: flex;
    height: 80px;
    background: linear-gradient(to bottom, $accent-color 79%, rgba(36, 36, 36, 50) 100%);
    align-items: center;

    .components {
        position: relative;
        display: flex;
        align-items: center;
        justify-items: center;
        height: 100%;

        margin-right: auto;
        margin-left: auto;

        .component {
            position: relative;
            margin-left: 50px;

            &.active {
                color: transparent;
                background-clip: text;
                background-image: $third-linear-gradient;

                // Underline
                &::after {
                    position: absolute;
                    content: '';
                    bottom: 0; 
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: $third-linear-gradient;
                }
            }
        }

    }

    .lang {
        margin-right: 40px;
    }

    .sign-in {
        margin-right: 10px;
    }

    .logo {
        margin-left: 40px;
    }
}

@media (max-width: 1300px) {
.header {
    height: 60px;
 
    .components {
        .component  {
            margin-left: 30px;
        }
    }

    .sign-in  {
        height: 10px;
    }
}

}
</style>