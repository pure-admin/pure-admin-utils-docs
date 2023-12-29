import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      'vue': '@pureadmin/utils/alias'
    }
  },
  server: {
    port: 3000,
  }
});
