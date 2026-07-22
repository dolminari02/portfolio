/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',        // 정적 HTML로 내보내기
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',  // GitHub Pages 경로 설정
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: { unoptimized: true } 
};

export default nextConfig;