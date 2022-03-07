import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import config from './package.json';

function resolve(p) {
  return path.resolve(__dirname, p);
}

const banner = `\n/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2021 @${config.author}.
*/\n;`;

export default defineConfig({
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
        @import "@/assets/styles/comm";
        `
      }
    }
  },
  plugins: [vue()],
  build: {
    outDir: './lib',
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      preserveEntrySignatures: 'strict',
      output: {
        banner,
        globals: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: 'src/packages/index.ts',
      name: 'capui',
      formats: ['es', 'umd']
    }
  }
});
