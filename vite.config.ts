import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import MD from 'vite-plugin-md';
import VitePluginVueJSX from '@vitejs/plugin-vue-jsx';
const hljs = require('highlight.js');

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue';"
  },
  base: '/cap3x/',
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@docs': resolve('./src/sites/docs'),
      '@mobile': resolve('./src/sites/mobile'),
      '@p': resolve('./src/packages')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/styles/default";
        @import "@/assets/styles/variables";
        @import "@/assets/styles/comm";`
      }
    },
    postcss: {
      plugins: [
        require('autoprefixer')({
          overrideBrowserslist: [
            '> 0.5%',
            'last 2 versions',
            'ie > 11',
            'iOS >= 10',
            'Android >= 5'
          ]
        })
      ]
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    MD({
      markdownItOptions: {
        highlight: function (str, lang) {
          if (lang && hljs && hljs.highlight) {
            try {
              // return Prism.highlight(str,Prism.languages[lang], lang);
              return hljs.highlight(lang, str).value;
            } catch (__) {}
          }

          return ''; // 使用额外的默认转义
        }
      }
    }),
    VitePluginVueJSX({})
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
