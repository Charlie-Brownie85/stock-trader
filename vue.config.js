module.exports = {
  css: {
    sourceMap: true,
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        sourceMap: true,
        additionalData: `@import "~@/assets/styles/_variables.scss";`
      },
    },
  },
};
