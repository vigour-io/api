'use strict'

exports.api = {
  type: 'base',
  noContext: true,
  components: require('./api'),
  config: {
    type: 'base',
    properties: {
      method: true,
      json: true,
      credentials: true
    },
    method: 'POST',
    json: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  },
  inject: require('./common'),
  isError (res) {
    return (!res || res.success === false || !res.success)
  },
  Child: { type: 'api' }
}
