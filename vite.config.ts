import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// Strips Figma Make's versioned import syntax: "pkg@1.2.3" → "pkg"
function figmaVersionedImportResolver() {
  return {
    name: 'figma-versioned-import-resolver',
    async resolveId(id, importer) {
      const match = id.match(/^(@?[^@]+)@[\d]+\.[\d]+\.[\d]+(\/.*)?$/)
      if (match) {
        const bare = match[1] + (match[2] || '')
        return this.resolve(bare, importer, { skipSelf: true })
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaVersionedImportResolver(),
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
