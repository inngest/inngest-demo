/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    // This makes sure to include inngest functions in the server bundle
    outputFileTracingIncludes: {
      '/background-jobs': ['./app/(use-cases)/background-jobs/**/*'],
      '/workflows': ['./app/(use-cases)/workflows/**/*'],
      '/scheduled-functions': ['./app/(use-cases)/scheduled-functions/**/*'],
    },
  }
};

module.exports = nextConfig;
