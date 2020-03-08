module.exports = {
  title: 'Tips and tricks závěrečných prací',
  description: 'Tips and tricks závěrečných prací,',
  themeConfig: {
    nav: [
    	{
        text: 'dobromi1@uhk.cz',
        link: 'mailto:dobromi1@uhk.cz'
      },
    ],
    markdown: {
      lineNumbers: true
    },
    sidebar: [
      ['/', 'Domů'], 
      '/guides/latex',
      '/guides/overleaf',
      '/guides/zotero',
      '/guides/wok',
      '/guides/scihub',
      '/guides/obecne-chyby',
      '/guides/profi',
      '/guides/smap',
    ],
    configureWebpack: {
      resolve: {
        alias: {
          '@img': './img/'
        }
      }
    }
  },
  dest: 'public'
}