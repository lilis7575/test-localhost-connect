import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/:path*' // 백엔드 서버 주소
      }
    ]
  }
};

export default nextConfig;
