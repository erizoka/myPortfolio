import axios from "axios";
import type { App } from "vue";

const axiosInstance = axios.create({
  baseURL: "https://formspree.io/f/xkndblwp",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  install(app: App) {
    app.config.globalProperties.$axios = axiosInstance;
  },
};

export { axiosInstance };
