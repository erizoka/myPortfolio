<template>
  <div class="modal" @click.self="closeModal">
    <div class="animate__animated animate__zoomIn animate__faster" role="dialog">
      <v-carousel show-arrows="hover" cycle height="auto" hide-delimiter-background color="purple">
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

      const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10));
      document.body.style.top = '';
      document.body.style.overflow = ''
      window.scrollTo(0, scrollY);
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.carousel-img {
  height: 500px;
  width: fit-content;
}

@media (max-width: 768px) {
  .modal {
    padding: 20px;
  }

  .carousel-img {
    height: fit-content;
    max-height: 600px;
    width: 100%;
  }
}
</style>