const path = require('node:path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    // This makes sure to include inngest functions in the server bundle
    outputFileTracingRoot: path.join(__dirname, './app/(use-cases)/'),
  }
};

module.exports = nextConfig;
