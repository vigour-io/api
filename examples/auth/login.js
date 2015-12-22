var auth = require('vigour-api').auth

// login errors
auth.login.on('error', (err) => {
  console.log('login', 'on.error', err)
})

// useful for spinners, need check
auth.login.loading.on((isWorking) => {
  console.log('login', 'loading.on.data', isWorking)
  if (isWorking) console.log('login', 'loading.on.', 'Login started')
  else console.log('login', 'loading.on.', 'Login finished')
})

// adding custom response handler
auth.login.on('response', (data) => {
  console.log('login', 'on.response', data)
})

// login request config
auth.login.set({
  url: 'http://demo2052708.mockable.io/login',
  httpMethod: 'post',
  headers: {
    'Content-Type': 'application/json',
    'yo-header-title': 'yo-header-value'
  }
})

// login
auth.login.execute({
  username: 'xxx',
  password: 'xxx'
})

var isNode = require('vigour-js/lib/util/is/node')
if (!isNode) {
  // facebook
  setTimeout(() => {
    auth.login.facebook.val = true
  }, 1000)
}
