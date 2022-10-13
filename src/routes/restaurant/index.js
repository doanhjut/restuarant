const express = require('express');
const bookRoute = require('./book.route');
const commentsRoute = require('./comments.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/book',
    route: bookRoute,
  },
  {
    path: '/comments',
    route: commentsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
