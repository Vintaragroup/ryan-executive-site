import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    jsx: true,
    jsxImportSource: '@mdx-js/react',
  },
});

const nextCommand = process.argv[2];
const usesProductionOutput = nextCommand === 'build' || nextCommand === 'start';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  devIndicators: false,
  distDir: usesProductionOutput ? '.next-build' : '.next',
};

export default withMDX(nextConfig);
