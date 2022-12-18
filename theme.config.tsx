import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Pterodactyl Docs</span>,
  project: {
    link: 'https://github.com/pterodactyl/',
  },
  chat: {
    link: 'https://discord.com/invite/pterodactyl',
  },
  docsRepositoryBase: 'https://github.com/skidoodle/pterodocs/blob/main',
};

export default config;
