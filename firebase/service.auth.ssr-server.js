import admin from 'firebase-admin'

const config = {"apiKey":"AIzaSyCFB3O8-QKkDwOq7gTNGa3GHX7YKimWUC8","authDomain":"fx1-development.firebaseapp.com","projectId":"fx1-development","storageBucket":"fx1-development.appspot.com","messagingSenderId":"24532261886","appId":"1:24532261886:web:2924c01844a78098127eaf","measurementId":"G-PTKDG9TC7B"}

const simulateUserRecord = ({
  uid,
  email,
  email_verified: emailVerified,
  name: displayName
}) => ({
  uid,
  email,
  emailVerified,
  displayName
})

if (!admin.apps.length) {
  admin.initializeApp(config)
}

export default async ({ req, res }) => {
  if (!req || !req.headers.authorization) {
    return
  }

  // Parse the injected ID token from the request header.
  const authorizationHeader = req.headers.authorization || ''
  const components = authorizationHeader.split(' ')
  const idToken = components.length > 1 ? components[1] : ''

  try {
    // Try to verify the id token, additionally checking if the token was revoked
    const decodedToken = await admin.auth().verifyIdToken(idToken)

    if (decodedToken.uid) {
      const authUser = simulateUserRecord(decodedToken)

      res.locals = {
        ...res.locals,
        user: {
          ...authUser,
					allClaims: decodedToken,
					idToken,
        }
      }
    }
  } catch (e) {
    console.error(e)
  }
}
