import React from 'react';
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Pterodactyl Docs</span>,
  project: {
    link: 'https://github.com/pterodactyl/',
  },
  chat: {
    link: 'https://discord.com/invite/pterodactyl',
  },
  primaryHue: {
      dark: 212,
      light: 212,
  },
  docsRepositoryBase: 'https://github.com/skidoodle/pterodocs/blob/main',
    useNextSeoProps() {
      const { route } = useRouter()
        if (route !== '/') {
            return {
                titleTemplate: '%s – Pterodactyl'
            }
        }
    },
    head: (
            <>
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Language" content="en" />
            <meta name="description" content="Pterodactyl is an open-source game server management panel built with PHP, React, and Go. Designed with security in mind, Pterodactyl runs all game servers in isolated Docker containers while exposing a beautiful and intuitive UI to end users." />
            <meta name="og:description" content="Pterodactyl is an open-source game server management panel built with PHP, React, and Go. Designed with security in mind, Pterodactyl runs all game servers in isolated Docker containers while exposing a beautiful and intuitive UI to end users." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="https://nextra.site/og.jpeg" />
            <meta name="twitter:site:domain" content="pterodocs.vercel.app" />
            <meta name="twitter:url" content="https://pterodocs.vercel.app" />
            <meta name="og:title" content="Pterodactyl Docs" />
            <meta name="apple-mobile-web-app-title" content="Pterodactyl Docs" />
            </>
            ),
};

export default config;
