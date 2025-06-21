import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'; // Import Vue JSX plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()], // Add vueJsx() plugin here
  base: '/', // Optional: Define base path for your app
});
