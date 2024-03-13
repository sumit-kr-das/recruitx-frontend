import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        short_name: "RecruitX",
        name: "Jobs - Recruitment - Job Search -  Employment - Job Vacancies - RecruitX",
        start_url: "https://recruitx.vercel.app",
        display: "standalone",
        theme_color: "#ffffff",
        description:
          "Recruitx connects skilled candidates with the suitable recruiters from different companies. Explore the jobs for you.",
        icons: [
          {
            src: "/logo512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  define: {
    "process.env": process.env,
  },
});
