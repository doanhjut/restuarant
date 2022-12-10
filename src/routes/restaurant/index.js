const express = require('express');
const bookRoute = require('./book.route');
const commentsRoute = require('./comments.route');
const dishRoute = require('./dish.route');
const billRoute = require('./bill.route');
const commentDishRoute = require('./commentDishs.route'); 
const blogPageIntro = require('./blogPageIntro.route'); 
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
  {
    path: '/dishs',
    route: dishRoute,
  },
  {
    path: '/bill',
    route: billRoute,
  },
  {
    path :'/commentDish',
    route :commentDishRoute
  },
  {
    path :'/blogPageIntro',
    route :blogPageIntro
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
