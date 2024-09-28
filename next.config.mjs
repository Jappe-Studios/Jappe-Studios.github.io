import withLess from 'next-with-less';

/** @type {import('next').NextConfig} */
const nextConfig = withLess({
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true, // Required for Ant Design
      /*modifyVars: {
        '@primary-color': '#B618FFFF',  // Custom primary color
        '@layout-body-background': '#001529', // Dark background for layout
        '@component-background': '#001529', // Background for components
        '@heading-color': '#ffffff', // Heading color
        '@text-color': '#ffffff', // Text color
        '@text-color-secondary': '#cccccc', // Secondary text color
        '@border-color-base': '#434343', // Border color
      },*/
    },
  },

  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is usually the slug of your repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/jappe-studios",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
});

export default nextConfig;
