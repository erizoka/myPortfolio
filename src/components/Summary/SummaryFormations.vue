<template>
    <h2 class="formacao-title animate__animated animate__fadeInUp">Formação</h2>
    <section class="formacao animate__animated animate__fadeInUp animate__fast">
        <v-card class="card-container" elevation="7" v-for="r in resume" :key="r">
            <v-card class="card">
                <v-card-title style="font-weight: bold; white-space: normal;">{{ r.institution }}</v-card-title>
                <v-card-subtitle>{{ r.location }} | {{ r.date }}</v-card-subtitle>
                <v-card-text style="font-style: italic">{{ r.course }}</v-card-text>
            </v-card>
            <v-card-text class="card-text">{{ r.description }}</v-card-text>
            <v-chip class="chip" v-if="r.hasIcon">
                <icon :icon="r.icon" style="color: #FFFF; font-size: 3dvh;" />
            </v-chip>
        </v-card>
    </section>
</template>

<script>
import { resume } from './data';

export default {
    data() {
        return {
            resume
        }
    }
}
</script>

<style scoped>
.formacao {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
}

.formacao-title {
    font-size: 32px;
    font-family: "Plus Jakarta Sans";
    color: #E21E80;
    align-self: first baseline;
    margin-bottom: 30px;
    margin-left: 200px;
    position: relative;
}

.card-container {
    display: flex;
    padding: 50px;
    margin-bottom: 50px;
    border-radius: 10px;
}

.card {
    background-color: #ebebebaa;
    max-width: 200px;
    min-width: 200px;
    word-wrap: break-word;
}

.card-text {
    font-size: larger;
    opacity: 0.8;
    margin-left: 30px;
}

.chip {
    position: absolute;
    right: 2%;
    top: 5%;
    background-color: #E21E80;
}

@media (min-width: 1500px) {
    .formacao {
        display: grid;
        grid-template-columns: 700px 700px;
    }

    .formacao-title {
        margin-left: 40px;
        font-size: 37px;
    }

    .card-container {
        padding: 30px;
        margin: 20px;
        height: 280px;
    }

    .card-text {
        font-size: large;
    }
}

@media (max-width: 768px) {
    .formacao {
        width: 100%;
    }

    .formacao-title {
        font-size: 25px;
        margin-left: 10px;
    }

    .card-container {
        flex-direction: column;
        padding: 40px;
    }

    .card-text {
        margin: 5px 0;
        font-size: medium;
    }
}
</style>