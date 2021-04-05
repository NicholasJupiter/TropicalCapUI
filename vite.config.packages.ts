import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import config from './package.json';

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2021 @${config.author}.
*/`;

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('./src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/styles/default";
        @import "@/assets/styles/variables.css";`
      }
    }
  },
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        banner,
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: 'src/ju.ts',
      name: 'ju',
      formats: ['es', 'umd']
    }
  }
});
