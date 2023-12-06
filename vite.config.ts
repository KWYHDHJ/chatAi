import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      // '/api': 'http://43x818e468.zicp.fun:5001'
      // '/api': 'https://ems.fenxi-tech.com'
      // "/api": "http://192.168.21.251:3100",
      "/api": "http://localhost:3100",
    },
  },
  plugins: [react()],
});
