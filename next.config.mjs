import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
};

const pwaConfig = {
  dest: 'public',
};

export default withPWA({
  ...nextConfig,
  ...pwaConfig,
});