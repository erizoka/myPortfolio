<template>
    <header class="header">
        <span class="title">
            <a><router-link to="/">Erica Esteves</router-link></a>
        </span>
        <div class="header-container">
            <button class="menu-toggle" @click="toggleMenu"><icon :icon="['fas', 'bars']" /></button>
            <nav class="menu" :class="{ 'menu-active': isMenuOpen }">
                <ul>
                    <li><router-link to="/">Início</router-link></li>
                    <li><router-link to="/summary">Resumo</router-link></li>
                    <li><router-link to="/projects">Projetos</router-link></li>
                    <li><router-link to="contact">Contato</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>

export default {
    data(){
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
}
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

    .header-container {
        width: 30%;
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

    .menu-toggle {
        display: none;
        font-size: 1.5em;
        background: none;
        border: none;
    }

    @media (max-width: 768px) {
        @keyframes slideInDown {
            0% {
                transform: translateY(-10%);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .title {
            margin-left: 10px;
            padding-left: 5px;
        }

        .title a {
            font-size: medium;
        }

        .header-container {
            display: flex;
            flex-direction: column;
        }
        
        .menu {
            display: none;
            position: absolute;
            top: 100%;
            right: 0;
            margin-right: 0;
            background-color: #ffffff;
            z-index: 1000;
            transform: translateY(-100%);
            transition: opacity 0.3s ease-out, transform 0.3s ease-out;
            border-radius: 8px;
        }
        
        .menu.menu-active {
            display: block;
            width: max-content;
            animation: slideInDown 0.3s ease-out forwards;
        }
        
        .menu ul {
            flex-direction: column;
            font-size: 10px;
            margin: 0;
            padding: 1px;
        }
        
        .menu li {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            justify-content: center;
            align-items: center;
            width: 90px;
        }

        .menu a {
            font-size: 15px;
            display: block;
        }

        .menu-toggle {
            display: block;
        }
    }

</style>