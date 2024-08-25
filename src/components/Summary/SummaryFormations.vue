<template>
    <section class="formacao animate__animated animate__fadeInUp animate__fast">
        <h2>Formação</h2>
        <v-card class="card-container" elevation="7"
            v-for="r in resume" :key="r">
            <v-card class="card">
                <v-card-title style="color: #E21E80;">{{ r.date }}</v-card-title>
                <v-card-text style="font-weight: bold;">{{ r.institution }}</v-card-text>
                <v-card-subtitle>{{ r.location }}</v-card-subtitle>
                <v-card-text style="font-style: italic">{{ r.course }}</v-card-text>
            </v-card>
            <v-card-text class="card-text">{{ r.description }}</v-card-text>
        </v-card>
    </section>
</template>

<script>
import resume from './data';

export default {
    data(){
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

    .formacao h2 {
        font-size: 32px;
        font-family: "Plus Jakarta Sans";
        color: #E21E80;
        align-self: self-start;
        margin-bottom: 30px;
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

    @media (max-width: 768px) {
        .formacao { width: 100%; }
        
        .formacao h2 {
            font-size: 25px;
            left: 10;
            margin-bottom: 10px;
            margin-top: 20px;
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