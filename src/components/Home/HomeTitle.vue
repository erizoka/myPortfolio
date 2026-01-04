<template>
    <div class="home-title animate__animated animate__fadeInUp">
        <span>Web < &middot; Development &middot;> Mobile</span>
        <h3>Possui um projeto?</h3>
        <h1>Posso ajudar a torna-lo real</h1>
        <div class="buttons">
            <button class="btn1" @click="navigate('/summary')">Resumo</button>
            <button class="btn2" @click="navigate('/projects')">Projetos</button>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const navigate = (path) => {
            router.push(path);
        };

        return {
            navigate
        };
    }
}
</script>

<style scoped>
.home-title {
    display: flex;
    flex-direction: column;
}

.home-title span {
    text-transform: uppercase;
    background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
    color: #ffffff;
    padding: 3px 9px;
    border-radius: 7px;
    font-size: 12px;
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
}

.home-title h3 {
    color: #6C757D;
    font-size: 28px;
    font-family: "Plus Jakarta Sans";
    font-weight: 200;
    margin-bottom: 7px;
}

.home-title h1 {
    margin: 0;
    background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Plus Jakarta Sans";
    font-size: 4rem;
}

.buttons {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
}

.buttons button {
    border-radius: 10px;
    border: 1px solid;
    padding: 20px 50px;
    margin: 0 5px;
    font-size: 16px;

    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;
}

.buttons .btn1 {
    background-color: blue;
    color: white;
}

.buttons .btn1:hover {
    background-color: rgb(49, 7, 104);
}

.buttons .btn2:hover {
    background-color: #212529;
    color: white;
}

@media (min-width: 768px) {
    .animate__animated.animate__fadeInUp {
        --animate-delay: 1s;
    }

    .home-title {
        width: 40%;
        align-self: start;
        align-items: start;
        margin: 2.5rem;
    }

    .buttons {
        align-items: start;
    }

    .buttons .btn1 {
        margin-right: 10px;
    }
}

@media (max-width: 768px) {
    .home-title {
        padding: 50px 0;
        align-items: center;
        justify-content: center;
    }

    .home-title h1 {
        text-align: center;
        padding: 0 40px;
        font-size: 2.2rem;
    }

    .home-title h3 {
        font-size: 1.2rem;
    }

    .buttons {
        display: flex;
        justify-content: center;
    }

    .buttons button {
        margin: 10px 0;
        padding: 20px 90px;
    }
}
</style>