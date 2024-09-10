// This indicates the type for better IDE support
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      remotePatterns: [
        { protocol: 'https', hostname: 'readymadeui.com' },
        { protocol: 'https', hostname: 'images.unsplash.com' },
        { protocol: 'https', hostname: 'placehold.co' },
        { protocol: 'https', hostname: 'github.com' },
        { protocol: 'https', hostname: 'via.placeholder.com' },
        { protocol: 'https', hostname: 'randomuser.me' },
      ],
    },
  };
  
  export default nextConfig;
  