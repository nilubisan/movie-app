<template>
    <div class="header">
        <button class="header__theme-swicher-button">
            <img src="../../../../shared//assets/images/theme-switcher.svg"/>
        </button>
        <button class="header__language-swicher-button">
            <img src="../../../../shared//assets/images/language-switcher.svg"/>
            <span class="title">RU</span>
        </button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        box-sizing: border-box;
    }

    .header__theme-swicher-button {
        width: 24px;
        height: 24px;
    }

    .header__language-swicher-button {
        width: 20px;
        height: 20px;
        display: flex;
        column-gap: 8px;

        .title {
            font-family: Inter, sans-serif;
            font-size: 18px;
            font-weight: 400;
            line-height: 22px;
            color: var(--main-text-color-green);
        }
    }
</style>