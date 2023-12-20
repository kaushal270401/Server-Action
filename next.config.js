/** @type {import('next').NextConfig} */
const { withGluestackUI } = require('@gluestack/ui-next-adapter');
 
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader:false,
  transpilePackages: [
    /**
     * NOTE: Even though `react-native` is never used in Next.js,
      you need to list `react-native` because `react-native-web`
      is aliased to `react-native`. Adding `react-native-web` will not work.
     */
    'react-native',
    'react-native-web',
    '@gluestack-ui/themed'
    // Add more React Native / Expo packages here...
  ],
  experimental: {
    serverActions: {
      allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
    },
  },
};
 
module.exports = withGluestackUI(nextConfig);
