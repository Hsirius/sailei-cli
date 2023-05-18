import react from "@vitejs/plugin-react";
import path, { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import viteCompression from "vite-plugin-compression";
import { createHtmlPlugin } from "vite-plugin-html";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

const getViteEnv = (
  mode: string,
  target: "VITE_APP_TITLE" | "VITE_PROXY" | "VITE_PUBLIC_PATH"
) => {
  return loadEnv(mode, process.cwd())[target];
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(`当前环境: ${getViteEnv(mode, "VITE_APP_TITLE")} ${mode}`);

  return {
    base: getViteEnv(mode, "VITE_PUBLIC_PATH"),
    build: {
      manifest: true,
      rollupOptions: {
        output: {
          //静态资源分类打包
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          manualChunks: (id) => {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
        },
      },
    },
    server: {
      port: 8090,
      host: true,
      open: true,
      proxy: {
        "/api": {
          target: mode === "dev" ? getViteEnv(mode, "VITE_PROXY") : "",
          changeOrigin: true,
          secure: false,
        },
      },
    },
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            title: getViteEnv(mode, "VITE_APP_TITLE"),
          },
        },
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), "src/images/svg")],
        // 指定symbolId格式
        symbolId: "svg-[dir]-[name]",
      }),
      // 对大于 100KB 的文件进行gzip压缩
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 102400,
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    css: {
      modules: {
        generateScopedName: "[path]_[local]-[hash:base64:5]",
        localsConvention: "camelCase",
      },
    },
  };
});
