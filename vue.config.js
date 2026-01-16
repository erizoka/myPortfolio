const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/myPortfolio/" : "/",

  devServer: {
    client: {
      overlay: {
        runtimeErrors: (error) => {
          if (error.message === "ResizeObserver loop completed with undelivered notifications.") {
            return false;
          }
          return true;
        },
      },
    },
  },
})

