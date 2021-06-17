// import { useEffect } from 'react'

// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

// import authService from '../shared/services/auth0Service'

import { useUser } from '@auth0/nextjs-auth0'

export default function Home () {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{error.message}</div>

  if (user) {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    )
  }
  return <a href="/api/auth/login">Login</a>
}
