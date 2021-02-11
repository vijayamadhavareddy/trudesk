var mongoose = require('mongoose')

var COLLECTION = 'tickets_history1'

var historySchema= require('./history')

/**
 * Tag Schema
 * @module models/tickets_history1
 * @class Tag

 *
 * @property {object} _id 
 * @property {String} action 
 * @property {String} description 
 * @property {String} owner 
 * @property {String} date 
 * @property {String} ticket_id 
 */
var tickets_history1 = mongoose.Schema({
  action: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'accounts' },
  description: { type: String },
  ticket_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'tickets'
  }
})

module.exports = mongoose.model(COLLECTION, tickets_history1)
