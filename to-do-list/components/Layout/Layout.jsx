import styles from './Layout.module.css'

import Head from 'next/head'

export const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.content}>
        { children }
      </div>
    </>
  )
}
