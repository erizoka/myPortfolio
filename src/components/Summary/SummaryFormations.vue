<template>
    <h2 class="formacao-title animate__animated animate__fadeInUp">Formação</h2>
    <section class="formacao animate__animated animate__fadeInUp animate__fast">
        <div v-for="(r, i) in resume" :key="i">
            <v-card class="card-container" elevation="7" v-if="r.type == 'graduation'">
                <v-card class="card">
                    <v-card-title style="font-weight: bold; white-space: normal; font-size: 1.2rem; hyphens: none;">
                        {{ r.course }}
                    </v-card-title>
                    <v-card-subtitle style="font-style: italic">{{ r.title }}</v-card-subtitle>
                    <v-card-text>{{ r.formationType }} | {{ r.date }}</v-card-text>
                </v-card>
                <v-card-text class="card-text">{{ r.description }}</v-card-text>
                <icon class="chip-up" :icon="r.icon" style="color: #E21E80; font-size: 4dvh;" />
            </v-card>

            <v-menu location="bottom" v-else>
                <template v-slot:activator="{ props }">
                    <v-card v-bind="props" class="card-container"
                        :class="props['aria-expanded'] === 'true' ? '' : 'with-hover'" elevation="7">
                        <v-card class="card">
                            <v-card-title class="card-title">
                                <icon :icon="r.icon" />
                            </v-card-title>
                            <v-card-subtitle
                                style="font-size: 1.2rem; text-align: center; font-weight: bolder; white-space: normal">
                                {{ r.title }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="r.subtitle != null"
                                style="white-space: normal; font-size: small; text-align: center;">
                                {{ r.subtitle }}
                            </v-card-subtitle>
                            <v-card-text style="opacity: 80%; text-align: center;">
                                {{ r.courseList.length }} curso(s) com {{ getCargaHorasTotal(r.courseList) }}h.
                            </v-card-text>
                        </v-card>
                        <v-card-text class="card-text">{{ r.description }}</v-card-text>
                        <icon class="chip-down"
                            :icon="['fas', props['aria-expanded'] === 'true' ? 'circle-up' : 'circle-down']"
                            style="color: #E21E80; font-size: 3.5dvh;" />
                    </v-card>
                </template>

                <v-list v-for="(c, i) in r.courseList" :key="i" :value="i" style="margin: 0.5px;">
                    <div class="d-flex align-center justify-space-between" style="min-width: 250px;">
                        <span class="pl-4">{{ c.name }}</span>

                        <v-btn v-if="c.certificationLink" :href="c.certificationLink" target="_blank" icon
                            variant="text" density="comfortable">
                            <icon :icon="certificationIcon" style="color: gold; font-size: 1.5rem;" />
                        </v-btn>
                    </div>
                </v-list>
            </v-menu>
        </div>
    </section>
</template>

<script>
import { resume } from './data';

export default {
    data() {
        return {
            resume,
            openCard: null,
            certificationIcon: ["fas", "award"],
        }
    },
    methods: {
        getCargaHorasTotal(cursos) {
            if (!cursos) return 0;
            return cursos.reduce((acc, curso) => acc + (curso.ch || 0), 0);
        },
    },
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

.chip-up {
    position: absolute;
    right: 2%;
    top: 5%;
}

.chip-down {
    position: absolute;
    right: 2%;
    bottom: 5%;
}

.card-title {
    text-align: center;
    font-size: 4rem;
    font-weight: bolder;
    color: white;
    background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
}

.with-hover:hover {
    cursor: pointer;
    transition: transform .7s cubic-bezier(0, 0, 0, 1);
    transform: scale(1.07);
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