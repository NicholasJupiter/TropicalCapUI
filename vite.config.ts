import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import MD from 'vite-plugin-md';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ju3x/',
  resolve: {
    alias: {
      '@': resolve('./src'),
      docs: resolve('./src/sites/docs'),
      mobile: resolve('./src/sites/mobile'),
      pack: resolve('./src/packages')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/styles/default";
        @import "@/assets/styles/variables";`
      }
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    MD()
  ],
  build: {
    target: 'es2015',
    outDir: './dist/ju3x/',
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        doc: resolve(__dirname, 'index.html'),
        preview: resolve(__dirname, 'preview.html')
      }
    }
  }
});
