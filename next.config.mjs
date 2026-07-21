/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',        // 정적 HTML로 내보내기
  basePath: '/portfolio',  // GitHub Pages 경로 설정
  images: { unoptimized: true } 
};

export default nextConfig;
