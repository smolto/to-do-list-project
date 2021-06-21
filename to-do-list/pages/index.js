// import { useEffect } from 'react'

// import Head from 'next/head'
import styles from '../styles/Index.module.css'

import { Layout } from './../components/Layout/Layout'

import { useUser } from '@auth0/nextjs-auth0'

export default function Home () {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{error.message}</div>

  if (user) {
    return (
      <Layout title={'Home'}>
        <div className={styles.content}>
          <div className={`${styles.user_info} pd-medium mg-small`}>
            <div className={styles['user_info-img']}>
              <img src={user.picture} alt='image' />
            </div>
            <h2>{user.name}</h2>
            <p className={styles['user_info-email']}>{user.email}</p>
            <a className='c-primary fs-medium sz-half pd-small' href="/api/auth/logout">Logout</a>
          </div>
        </div>
      </Layout>
    )
  }
  return (
    <Layout title={'Home'}>
      <div className={styles.content}>
        <a className='c-primary fs-medium pd-medium sz-full' href="/api/auth/login">Login</a>
      </div>
    </Layout>
  )
}
