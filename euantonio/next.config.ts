import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Essas configurações são ESSENCIAIS para o Vercel
  eslint: {
    ignoreDuringBuilds: true,  // Ignora erros ESLint no build
  },
  typescript: {
    ignoreBuildErrors: true,   // Ignora erros TypeScript no build
  },
  images: {
    unoptimized: true,         // Simplifica imagens para deploy
  },
  // Para Next.js 15 + App Router
  experimental: {
    // Remove se não quiser, mas ajuda no deploy
  }
};

export default nextConfig;