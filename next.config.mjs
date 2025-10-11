/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com", // Unsplash
            },
            {
                protocol: "https",
                hostname: "plus.unsplash.com", // Unsplash premium
            },
            {
                protocol: "https",
                hostname: "media.istockphoto.com", // iStock
            },
        ],
    },
};

export default nextConfig;
