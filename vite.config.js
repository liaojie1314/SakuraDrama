import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  axios: 'axios'
}

// https://vitejs.dev/config/
export default defineConfig({
  //base: "/test/", // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
  build: {
    chunkSizeWarningLimit: 1500,
    cssCodeSplit: true, //css 拆分
    sourcemap: false, //不生成sourcemap
    //minify: false, //是否禁用最小化混淆，esbuild打包速度最快，terser打包体积最小。
    assetsInlineLimit: 5000, //小于该值 图片将打包成Base64 
    rollupOptions: {
      external: externals,
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    } 
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
