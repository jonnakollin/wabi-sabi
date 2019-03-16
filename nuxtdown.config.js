module.exports = {
  api: function (isStatic) {
    const baseURL = 'http://localhost:3000';
    const browserBaseURL = !isStatic ? "" : 'https://wabi-sabi.netlify.com';

    return {
      baseURL,
      browserBaseURL
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
