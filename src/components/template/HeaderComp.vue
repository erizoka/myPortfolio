<template>
    <header class="header">
        <span class="title">
            <a><router-link to="/">Erica Esteves</router-link></a>
        </span>        
        <nav v-if="!isMobile" class="menu">
        <ul>
            <li><router-link to="/">Início</router-link></li>
            <li><router-link to="/summary">Resumo</router-link></li>
            <li><router-link to="/projects">Projetos</router-link></li>
            <li><router-link to="/contact">Contato</router-link></li>
        </ul>
        </nav>
        
        <v-menu v-else :close-on-content-click="false" offset-y>
            <template v-slot:activator="{ props }">
                <v-btn variant="text" class="mr-2" rounded="xl" v-bind="props">
                    <icon :icon="['fas', 'bars']" />
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in menuItems" :key="index" @click="navigate(item.path)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const isMobile = ref(false);
    const menuItems = ref([
      { title: 'Início', path: '/' },
      { title: 'Resumo', path: '/summary' },
      { title: 'Projetos', path: '/projects' },
      { title: 'Contato', path: '/contact' }
    ]);

    const router = useRouter();

    const checkWindowSize = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    const navigate = (path) => {
      router.push(path);
    };

    onMounted(() => {
      checkWindowSize();
      window.addEventListener('resize', checkWindowSize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', checkWindowSize);
    });

    return {
      isMobile,
      menuItems,
      navigate
    };
  }
};
</script>

<style scoped>
    .header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #F5F5F5;
        position: relative;
        z-index: 10;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .title {
        margin-left: 150px;
        padding: 20px 0 20px 0;
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title a {
        width: 100%;
        text-decoration: none;
        font-size: 20px;
        font-family: "Plus Jakarta Sans", 'Times New Roman', Times, serif;
        color: #1E30F3;
        font-weight: bolder;
    }

    .menu {
       margin-right: 60px;
    }

    .menu ul {
        display: flex;
        justify-content: end;
        padding-right: 100px;
    }

    .menu li {
        list-style: none;
        width: fit-content;
    }
    
    .menu a {
        text-decoration: none;
        font-size: 14px;
        font-family: "Plus Jakarta Sans", 'Times New Roman', Times, serif;
        color: #0000008C;
        font-weight: bolder;
        margin: 0 5px;
        transition: font-size 0.3s ease;
    }

    .menu a:hover {
        color: #000;
        font-size: 1.1rem;
    }

    @media (max-width: 768px) {
        .title {
            margin-left: 10px;
            padding-left: 5px;
        }

        .title a { font-size: medium; }
    }
</style>