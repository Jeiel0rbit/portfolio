import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Diga ao Next.js para criar um site estático, que funciona melhor no GitHub Pages.
  output: 'export',

  // 2. Diga ao Next.js que o site está dentro da pasta "/portfolio".
  basePath: "/portfolio", 
  assetPrefix: "/portfolio/", 

  images: {
    // 3. Desative a otimização de imagens do Next.js, pois ela não funciona bem com sites estáticos.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
