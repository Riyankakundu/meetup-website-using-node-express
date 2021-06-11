const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const feedbackService = params;
  // eslint-disable-next-line consistent-return
  router.get('/', async (request, response, next) => {
    try {
      const feedback = await feedbackService.getList();
      return response.json(feedback);
    } catch (err) {
      return next(err);
    }
  });

  router.post('/', (request, response) => response.send('Feedback form posted'));

  return router;
};
