<template>
    <div class="modal-backdrop" @click.self="closeModal">
      <div class="modal" role="dialog">
            <v-carousel show-arrows="hover" cycle height="auto"
                    hide-delimiter-background color="purple">
                <v-carousel-item v-for="(image, index) in project.carousel" :key="index">
                    <img class="carousel-img" :src="image" :alt="`Imagem ${index + 1} do projeto ${project.title}`">
                </v-carousel-item>
            </v-carousel>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['close'],
    props: {
        project: {
            type: Object,
            required: true,
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }

  .carousel-img {
    height: 500px;
    width: fit-content;
  }

  @media (max-width: 768px) {
    .modal { 
      background: none;
      overflow: none;
      margin: 20px;
    }

    .carousel-img { 
      height: fit-content; 
      max-height: 800px;
      width: 100%;
    }
  }
</style>