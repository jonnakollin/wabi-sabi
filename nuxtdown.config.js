module.exports = {
  api: function (isStatic) {
    const baseUrl = 'https://wabi-sabi.netlify.com/' || 'http://localhost:3000';
    const browserBaseUrl = !isStatic ? "" : process.env.BASE_URL;

    return {
      baseUrl,
      browserBaseUrl
    };
  },
  content: [
    [
      'pages',
      {
        page: '/pages/_page',
        permalink: '/:slug',
        isPost: false
      }
    ],
    /*  [
       'posts',
       {
         page: '/blog/_posts',
         permalink: '/blog/:slug',
         isPost: false
       }
     ], */
  ]
};
