module.exports = {
  presets: [
    '@vue/app',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry'
      }
    ]
  ]，
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
