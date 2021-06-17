import auth0 from '../../../shared/utils/auth0'

export default async function login (req, res) {
  try {
    await auth0.handleLogin(req, res)
  } catch (error) {
    console.error(error)
    res.status(error.status || 500)
  }
}
