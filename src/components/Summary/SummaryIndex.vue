<template>
    <div class="resume">
        <h1 class="animate__animated animate__zoomIn animate__fast">Resumo</h1>
        <ResumeExperience />
        <ResumeFormations />
        <ResumeLanguages />
    </div>
</template>

<script>
import ResumeFormations from './SummaryFormations.vue';
import ResumeLanguages from './SummaryLanguages.vue';
import ResumeExperience from './SummaryExperience.vue';

export default {
    components: { ResumeFormations, ResumeLanguages, ResumeExperience }
}
</script>

<style scoped>
.resume {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px;
    padding: 30px;
}

.resume h1 {
    text-align: center;
    margin: 0;
    background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Plus Jakarta Sans";
    font-size: 3rem;
}

@media (max-width: 768px) {
    .resume {
        width: 98%;
    }

    .resume h1 {
        font-size: 2.5rem;
    }
}
</style>