// next.config.js or next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "", // Leave empty if no specific port
        pathname: "/**", // Allows any path under this hostname
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // Add any other external image domains here if you use them
    ],
  },
  // ... other configurations you might have
};

export default nextConfig; // or module.exports = nextConfig;
