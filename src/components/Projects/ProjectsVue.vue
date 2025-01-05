<template>
    <div class="projects">
        <h1 class="animate__animated animate__fadeIn animate__slow">Meus projetos</h1>
        <div class="card-container">
            <v-card class="pcard animate__animated animate__zoomIn" elevation="20" v-for="project in projectsData"
                :key="project">
                <v-parallax :src="project.thumbImg" height="inherit">
                    <v-card-title>{{ project.title }}</v-card-title>
                    <v-card-text>{{ project.description }}</v-card-text>
                    <v-card-actions>
                        <v-btn @click="showModal(project)" color="#FFF" variant="tonal" class="ml-4 elevation-20">
                            Galeria
                        </v-btn>
                        <v-chip :href="project.git" target="_blank" class="elevation-20" variant="flat">
                            <span>Git</span>
                            <icon :icon="['fab', 'github']" class="icon" />
                        </v-chip>
                    </v-card-actions>
                </v-parallax>
            </v-card>
            <ProjectsModal v-if="selectedProject" v-show="isModalVisible" class="animate__animated animate__fadeIn"
                :project="selectedProject" @close="isModalVisible = false" />
        </div>
    </div>
</template>

<script>
import projectsData from './data';
import ProjectsModal from './ProjectsModal.vue';

export default {
    components: { ProjectsModal },
    data() {
        return {
            projectsData,
            isModalVisible: false,
            selectedProject: null,
        }
    },
    methods: {
        showModal(project) {
            this.selectedProject = project;
            this.isModalVisible = true;

            const scrollY = window.scrollY;
            document.body.style.top = `${scrollY}px`;
            document.body.style.overflow = 'hidden'
        }
    }
}
</script>

<style scoped>
.projects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
}

.projects h1 {
    text-align: center;
    background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Plus Jakarta Sans";
    font-size: 2.5rem;
    margin-bottom: 30px;
}

.card-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
}

.pcard {
    width: 450px;
    height: 270px;
    margin: 20px;
}

.v-card-title {
    margin-top: 10px;
    color: rgb(246, 247, 248);
    font-weight: 800;
}

.v-card-text {
    margin-top: 15px;
    word-break: keep-all;
    color: #FFF;
}

.icon {
    margin-left: 5px;
}

.card-container span {
    margin-right: 3px;
}

@media (max-width: 768px) {
    .projects {
        padding: 0;
        width: 100%;
    }

    .projects h1 {
        font-size: 1.7rem;
        margin: 10px 0;
    }

    .card-container {
        width: 95%;
    }

    .v-card-text {
        margin: 0;
    }

    .pcard {
        height: 310px;
    }
}
</style>