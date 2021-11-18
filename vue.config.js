module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "瑶Go";
      return args;
    });
  },
};
