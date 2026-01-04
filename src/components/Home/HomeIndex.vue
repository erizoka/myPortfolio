<template>
    <div class="home">
        <div class="home-container">
            <HomeTitle />
            <HomeProfile />
        </div>
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

@media (min-width: 768px) {
    .home-container {
        display: flex;
        justify-content: center;
        margin: 0 40 0 40;
    }
}

@media (min-width: 1200px) {
    .home-container {
        margin: 100px 0 100px 0;
    }
}
</style>