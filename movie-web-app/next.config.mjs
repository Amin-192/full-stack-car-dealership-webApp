/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          // Optionally add pathname for more specific matching
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;