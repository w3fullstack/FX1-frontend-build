const middleware = {}

middleware['actionsHandler'] = require('..\\middleware\\actionsHandler.js')
middleware['actionsHandler'] = middleware['actionsHandler'].default || middleware['actionsHandler']

middleware['errorRedirect'] = require('..\\middleware\\errorRedirect.js')
middleware['errorRedirect'] = middleware['errorRedirect'].default || middleware['errorRedirect']

middleware['guestOnly'] = require('..\\middleware\\guestOnly.js')
middleware['guestOnly'] = middleware['guestOnly'].default || middleware['guestOnly']

middleware['hasDetails'] = require('..\\middleware\\hasDetails.js')
middleware['hasDetails'] = middleware['hasDetails'].default || middleware['hasDetails']

middleware['redirects'] = require('..\\middleware\\redirects.js')
middleware['redirects'] = middleware['redirects'].default || middleware['redirects']

middleware['refreshToken'] = require('..\\middleware\\refreshToken.js')
middleware['refreshToken'] = middleware['refreshToken'].default || middleware['refreshToken']

middleware['registeredOnly'] = require('..\\middleware\\registeredOnly.js')
middleware['registeredOnly'] = middleware['registeredOnly'].default || middleware['registeredOnly']

export default middleware
