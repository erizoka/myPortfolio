<template>
  <div class="modal" @click.self="closeModal">
    <div class="animate__animated animate__zoomIn animate__faster" role="dialog">
      <div v-if="isMobile" class="exit-container">
        <button class="exit" @click="closeModal">x</button>
      </div>
      <v-carousel :show-arrows="!isMobile ? 'hover' : undefined" height="auto" hide-delimiter-background color="purple">
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
  data() {
    return {
      isMobile: false,
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');

      const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10));
      document.body.style.top = '';
      document.body.style.overflow = ''
      window.scrollTo(0, scrollY);
    },

    checkWindowSize() {
      if (window.innerWidth <= 768) this.isMobile = true;
    },
  },
  mounted() {
    this.checkWindowSize();

    window.addEventListener('resize', this.checkWindowSize)
  },
  beforeDestroy() {
    window.addEventListener('resize', this.checkWindowSize)
  },
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

.exit-container {
  display: flex;
  justify-content: end;
  margin-bottom: 5px;
}

.exit {
  color: white;
  font-size: 20px;
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