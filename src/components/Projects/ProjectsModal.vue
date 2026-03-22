<template>
  <div class="modal" @click.self="closeModal">
    <div class="dialog-wrap animate__animated animate__zoomIn animate__faster" role="dialog">
      <div v-if="isMobileDevice" class="exit-container">
        <button class="exit" @click="closeModal">x</button>
      </div>
      <v-carousel :show-arrows="!isMobileDevice ? 'hover' : true" :height="isMobileDevice ? '80vh' : 'auto'" hide-delimiter-background cycle
        color="purple">
        <v-carousel-item v-for="(image, index) in project.carousel" :key="index">
          <div :class="project.isMobile ? 'mobile-gallery-wrapper' : 'web-to-mobile-container'">
            <img class="carousel-img"
              :class="(isMobileDevice && project.isMobile == undefined) ? 'carousel-img-rotate' : null" :src="image"
              :alt="`Imagem ${index + 1} do projeto ${project.title}`">
          </div>
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
      isMobileDevice: false,
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
      if (window.innerWidth <= 768) this.isMobileDevice = true;
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
  box-sizing: border-box;
}

.mobile-gallery-wrapper {
  padding: 0 70px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.web-to-mobile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.carousel-img {
  height: 90vh;
  width: fit-content;
}

.mobile-gallery-wrapper .carousel-img {
  max-height: 90vh;
  width: auto;
  object-fit: contain;
}

.carousel-img-rotate {
  transform: rotate(90deg);
  width: 80vh !important;
  height: 100vw !important;
  max-width: none !important;
  max-height: none !important;
  object-fit: contain;
  flex-shrink: 0;
}

.exit-container {
  display: flex;
  justify-content: end;
  margin-bottom: 5px;
  margin-right: 20px;
}

.exit {
  background-color: white;
  color: black;
  font-size: 25px;
  border-radius: 50%;
  height: 45px;
  width: 45px;
}

@media (max-width: 768px) {
  .modal {
    padding: 20px;
    box-sizing: border-box;
  }

  .dialog-wrap {
    width: 100%;
    max-width: 100%;
  }

  .carousel-img {
    height: fit-content;
    width: 70vw;
    object-fit: contain;
  }
}
</style>