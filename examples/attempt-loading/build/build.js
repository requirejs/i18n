{
  appDir: "..",
  baseUrl: ".",
  mainConfigFile: "../config.js",
  dir: "out",

  optimize: "none",

  modules: [
    {
      name: "zoo",
      include: [ "../../../../../requirejs/require" ]
    }
  ]
}
