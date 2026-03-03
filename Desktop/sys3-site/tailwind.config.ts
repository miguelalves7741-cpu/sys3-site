import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sys3: {
          preto: "#000000",
          laranjaVital: "#E84818",
          laranjaCaqui: "#EB6410",
          bege: "#DFDAC6",
          carvao: "#333333",
          prata: "#D2D2D2",
          branco: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;