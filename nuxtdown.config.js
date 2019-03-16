module.exports = {
  api: function (isStatic) {
    const baseURL = 'https://wabi-sabi.netlify.com';
    const browserBaseURL = !isStatic ? "" : process.env.BASE_URL;

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
