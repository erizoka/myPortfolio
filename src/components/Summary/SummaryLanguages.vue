<template>
    <v-card class="card animate__animated animate__fadeInUp" elevation="7">
        <v-card-title class="card-title">
            <icon :icon="['fas', 'code']" class="icon" />
            Linguagens
        </v-card-title>
        <div class="card-grid">
            <v-card-text v-for="language in languages" :key="language" class="card-items">
                {{ language.name }}
                <icon v-if="language.icon.type === 'fa'" :icon="language.icon.value" class="fa-icon" />
                <img v-else-if="language.icon.type === 'svg'" :src="language.icon.value" class="svg-icon" />
            </v-card-text>
        </div>
    </v-card>
</template>

<script>
import SpringBoot from '@/assets/svg-icons/springboot.svg'
import TypeScript from '@/assets/svg-icons/typescript.svg'
import Dart from '@/assets/svg-icons/dart.svg'

export default {
    data() {
        return {
            languages: [
                { name: 'Java', icon: { type: 'fa', value: ['fab', 'java'] } },
                { name: 'Spring Boot', icon: { type: 'svg', value: SpringBoot } },
                { name: 'Vue JS', icon: { type: 'fa', value: ['fab', 'vuejs'] } },
                { name: 'Flutter', icon: { type: 'fa', value: ['fab', 'flutter'] } },
                { name: 'Dart', icon: { type: 'svg', value: Dart } },
                { name: 'Typescript', icon: { type: 'svg', value: TypeScript } },
                { name: 'React JS', icon: { type: 'fa', value: ['fab', 'react'] } },
                { name: 'JavaScript', icon: { type: 'fa', value: ['fab', 'js'] } },
            ]
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    padding: 30px;
    border-radius: 10px;
}

.card-title {
    align-self: self-start;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Plus Jakarta Sans";
    font-weight: bold;
    font-size: 1.7rem;
}

.card .icon {
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: medium;
    margin-right: 10px;
    background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
}

.svg-icon {
    height: 22px;
}

.fa-icon {
    font-size: 22px;
}

.card-grid {
    display: flex;
    flex-wrap: wrap;
}

.card-items {
    flex: 1 1 calc(25% - 20px);
    width: 110px;
    margin: 10px;
    background-color: #F8F9FA;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    box-sizing: border-box;
    font-family: 'Lucida Sans', sans-serif;
    font-weight: 700;
}

@media (min-width: 1500px) {
    .card {
        width: 52%;
    }
}

@media (max-width: 768px) {
    .card {
        width: 100%;
    }

    .card .icon {
        font-size: small;
        padding: 5px;
    }
}
</style>