/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        turbo: {
            resolveAlias: {
                underscore: "lodash",
            },
            resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".json"],
        },
    },
};

export default nextConfig;
