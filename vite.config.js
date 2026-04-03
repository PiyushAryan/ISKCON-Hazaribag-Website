import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['images/**/*'],
      manifest: {
        name: 'ISKCON Hazaribag - Sri Sri Radha Madhava',
        short_name: 'ISKCON Hazaribag',
        description: 'Official app of ISKCON Hazaribag temple. Donate, explore spiritual teachings, and watch live darshan.',
        theme_color: '#feb47b',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/images/iskcon_logo.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/iskcon_logo.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/images/iskcon_logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,gif,webp,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'bootstrap-cache' },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-cache' },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            urlPattern: /^https:\/\/www\.iskcondelhi\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'iskcon-images-cache' },
          },
        ],
      },
    }),
  ],
})
