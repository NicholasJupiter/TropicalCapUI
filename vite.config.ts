import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: [{ find: /^\/@\//, replacement: '/src/' }] },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/@/assets/styles/variables.css";`
      }
    }
  },
  plugins: [vue()]
});
