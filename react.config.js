module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Admin panel';
      return args;
    });
  },
};
