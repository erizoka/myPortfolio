<template>
    <v-card class="card animate__animated animate__fadeInUp" elevation="7">
        <v-card-title class="card-title">
            <icon :icon="['fas', 'code']" class="icon"/>
            Linguagens
        </v-card-title>
        <div class="card-grid">
            <v-card-text v-for="language in languages" :key="language" class="card-items">
                {{ language }}
            </v-card-text>
        </div>
    </v-card>
</template>

<script>
export default {
    data(){
        return {
            languages: ['HTML', 'CSS', 'JavaScript',  
            'Vue JS', 'React JS', 'Typescript', 'Java', 'SQL']
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
        justify-content: flex-start;
        align-items: center;
        border-radius: 8px;
        box-sizing: border-box;
    }

    @media (max-width: 768px) {
        .card {
            width: 100%;
        }
    }
</style>