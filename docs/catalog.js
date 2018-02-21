var settings = {
  title: 'EmmaSofia Styleguide',
  logoSrc: "assets/logo/logo.svg",
  scripts: ['/main.js'],
  styles: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'],
  theme: {
    fontFamily: 'Muli',
    brandColor: '#4d2482',
    linkColor: '#000',
    sidebarColorTextActive: '#000',
    sidebarColorText: '#9d9d9d',
    background: '#fff',
    pageHeadingBackground: 'linear-gradient(150deg, #ecf6fb 15%, #f5efff 70%, #f5e4fb 94%)',
    pageHeadingTextColor: '#4d2482',
    textColor: '#000',
  },
  pages: [
    {
      title: 'Introduction',
      pages: [
        {
          path: '/',
          title: 'Getting started',
          src: 'catalog/01-intro/getting-started.md',
        },
      ]
    },
    {
      title: 'Layout',
      pages: [
        {
          path: '/block',
          title: 'Block',
          src: 'catalog/02-layout/block/block.md'
        },
        {
          path: '/column',
          title: 'Column',
          src: 'catalog/02-layout/column/column.md'
        },
        {
          path: '/container',
          title: 'Container',
          src: 'catalog/02-layout/container/container.md'
        },
        {
          path: '/grid',
          title: 'Grid',
          src: 'catalog/02-layout/grid/grid.md'
        }
      ]
    },
    {
      path: '/base',
      title: 'Base',
      pages: [
        {
          path: '/button',
          title: 'Button',
          src: 'catalog/03-base/button/button.md'
        }
      ]
    },
    {
      path: '/input',
      title: 'Input',
      pages: [
        {
          path: '/checkbox',
          title: 'Checkbox',
          src: 'catalog/04-input/checkbox/checkbox.md'
        },
        {
          path: '/input',
          title: 'Input',
          src: 'catalog/04-input/input/input.md'
        },
        {
          path: '/subscribe',
          title: 'Subscribe',
          src: 'catalog/04-input/subscribe/subscribe.md'
        },
        {
          path: '/radio-filter',
          title: 'Radio Filter',
          src: 'catalog/04-input/radio-filter/radio-filter.md'
        },
        {
          path: '/radio-tabs',
          title: 'Radio tabs',
          src: 'catalog/04-input/radio-tabs/radio-tabs.md'
        },
      ]
    },
    {
      path: '/components',
      title: 'Components',
      pages: [
        {
          path: '/cards',
          title: 'Cards',
          src: 'catalog/05-components/cards/cards.md'
        },
        {
          path: '/hero',
          title: 'Hero',
          src: 'catalog/05-components/hero/hero.md'
        },
        {
          path: '/header',
          title: 'Header',
          src: 'catalog/05-components/header/header.md'
        },
        {
          path: '/footer',
          title: 'Footer',
          src: 'catalog/05-components/footer/footer.md'
        },
        {
          path: '/spinner',
          title: 'Spinner',
          src: 'catalog/05-components/spinner/spinner.md'
        },
        {
          path: '/markdown',
          title: 'Markdown',
          src: 'catalog/05-components/markdown/markdown.md'
        }
      ]
    },
    {
      title: 'Utilities',
      pages: [
        {
          path: '/text',
          title: 'Text',
          src: 'catalog/06-utilities/text/text.md'
        }
      ]
    }
  ]
};

if (window.location.hostname === 'localhost') {
  settings.styles.push('main.css');
} else {
  settings.styles.push('https://unpkg.com/emmasofia@latest/main.css');
}

document.addEventListener('DOMContentLoaded', () => {
  Catalog.render(settings, document.getElementById('catalog'));
});
