<template>
    <div class="home">
        <HomeTitle />
        <HomeProfile />
        <HomeAbout />
    </div>
</template>

<script>
import HomeTitle from './HomeTitle.vue';
import HomeProfile from './HomeProfile.vue';
import HomeAbout from './HomeAbout.vue';

export default {
    components: { HomeTitle, HomeProfile, HomeAbout }
}
</script>

<style>
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
</style>