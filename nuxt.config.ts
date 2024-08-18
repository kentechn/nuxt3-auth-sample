// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  routeRules: {
    // Homepage pre-rendered at build time
    "/": { ssr: true },
  },
  srcDir: "src",
  css: ["@/assets/css/global.css"],
  modules: ["@nuxt/eslint", "vuetify-nuxt-module", "@vee-validate/nuxt"],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: "./vuetify.config.ts",
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: "double",
        semi: false,
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: "/api",
    },
    jwtSecret: process.env.JWT_SECRET ?? "dummy",
  },
})
