module.exports = {
  title: 'Global Experience Language',
  tagline: 'Welcome to the AEMO GEL, providing everything you need to know about our digital platforms to easily provide delightful and consistent customer experiences.',
  url: 'https://danielwang.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'aemo', // Usually your GitHub org/user name.
  projectName: 'aemo-gel-site', // Usually your repo name.
  plugins: ['docusaurus-plugin-sass'],
  staticDirectories: ['public', 'static'],
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'GEL Logo',
        src: 'img/gel-logo.svg',
        srcDark: 'img/gel-logo-dark.svg',
      },
      items: [
        {
          to: 'docs/guides/introduction',
          activeBaseRegex: 'docs/(intro|foundations)',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'docs/components/buttons-and-links/button',
          activeBasePath: 'docs/components',
          label: 'UI Components',
          position: 'left',
        },
        {
          to: 'docs/branding/logo',
          activeBasePath: 'docs/branding',
          label: 'Branding Guidelines',
          position: 'left',
        },
        {
          to: 'community',
          activeBasePath: 'community',
          label: 'Community',
          position: 'left',
        },
        // {
        //   href: 'https://github.com/danielwang/design-token-docs',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    docs: { 
      sidebar: {
        autoCollapseCategories: false, 
        hideable: false,
      },
    },
    footer: {
      style: 'light',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      logo: {
        alt: 'AEMO DDC',
        src: 'ddc-logo.svg',
        href: '#',
        width: 160,
      },
      copyright: `Copyright © ${new Date().getFullYear()} Crafted and coded by Digital Delivery Centre`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
};
