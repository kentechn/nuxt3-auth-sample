// vuetify.config.ts
import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration"
import colors from "vuetify/util/colors"

export default defineVuetifyConfiguration({
  /* vuetify options */
  defaults: {
    VBtn: {
      color: "primary",
      style: {
        textTransform: "none",
      },
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.purple.base,
        },
      },
    },
  },
})
