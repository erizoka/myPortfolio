<template>
    <div id="app">
        <HeaderVue />
        <ContentVue />
        <FooterVue />
    </div>
</template>

<script>
import ContentVue from "./components/template/ContentComp.vue";
import FooterVue from "./components/template/FooterComp.vue";
import HeaderVue from "./components/template/HeaderComp.vue";

export default {
    components: { HeaderVue, ContentVue, FooterVue },
    watch: {
        $route(to) {
            document.title = to.meta.title || 'myPortfolio';
        }
    },
    created() {
        document.title = this.$route.meta.title || 'myPortfolio';
    }
}
</script>

<style>
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

#app {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
