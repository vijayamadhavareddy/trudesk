var apiUtils = require('../apiUtils')

var sentimentApi = {}

sentimentApi.getPositiveComments = function (req, res) {
  return apiUtils.sendApiSuccess(res, { message: 'This is Poitive response' })
}

sentimentApi.getNegativeComments = function (req, res) {
  return apiUtils.sendApiSuccess(res, { message: 'This is negative response' })
}
sentimentApi.getComments = function (req, res) {
  const commentsType = req.params.type
  if (commentsType === 'positive') {
    sentimentApi.getPositiveComments(req, res)
  } else if (commentsType === 'negative') {
    sentimentApi.getNegativeComments(req, res)
  } else {
    apiUtils.sendApiError(res, 400, 'Wrong type')
  }
}

module.exports = sentimentApi
