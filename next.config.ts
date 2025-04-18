import type { NextConfig } from "next";
import CompressionPlugin from "compression-webpack-plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

/** Доп. интерфейс для Webpack */
interface WebpackRule {
    use?: Array<{
        options?: Record<string, unknown>;
        [key: string]: unknown;
    }>;
    [key: string]: unknown;
}

const nextConfig: NextConfig = {
    output: process.env.NODE_ENV === "production" ? "export" : undefined,
    distDir: "build",
    assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
    basePath: "",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    experimental: {
        inlineCss: false,
    },
    productionBrowserSourceMaps: false,

    webpack: (config, { isServer, dev }) => {
        if (dev) {
            config.devtool = "eval-source-map";
        } else {
            config.devtool = false;
        }

        if (!isServer && !dev) {
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    chunks: "all",
                    minSize: 20000,
                    maxSize: 70000,
                    cacheGroups: {
                        default: false,
                        vendors: false,
                        commons: {
                            name: "commons",
                            chunks: "all",
                            minChunks: 2,
                        },
                        shared: {
                            name: (module: { identifier: () => string }) => {
                                const moduleFileName = module
                                    .identifier()
                                    .split("/")
                                    .reduceRight((item: string) => item);
                                return `shared-${moduleFileName}`;
                            },
                            test: /[\\/]node_modules[\\/]/,
                            chunks: "all",
                        },
                    },
                },
            };
        }

        if (config.module && config.module.rules) {
            config.module.rules.forEach((rule: WebpackRule) => {
                if (rule.use && Array.isArray(rule.use)) {
                    rule.use.forEach((loader) => {
                        if (loader.options && typeof loader.options === "object") {
                            loader.options.sourceMap = false;
                        }
                    });
                }
            });
        }

        if (!dev && !isServer) {
            config.plugins.push(
                new CompressionPlugin({
                    filename: "[path][base].gz",
                    algorithm: "gzip",
                    test: /\.(js|css|html|svg)$/,
                    threshold: 10240,
                    minRatio: 0.8,
                })
            );

            config.plugins.push(
                new CompressionPlugin({
                    filename: "[path][base].br",
                    algorithm: "brotliCompress",
                    test: /\.(js|css|html|svg)$/,
                    compressionOptions: { level: 11 },
                    threshold: 10240,
                    minRatio: 0.8,
                    deleteOriginalAssets: false,
                })
            );
        }

        return config;
    },
};

export default withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
})(nextConfig);
