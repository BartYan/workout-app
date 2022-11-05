import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.scss';
import List from '../src/components/form/List/List'

const Home: NextPage = () => {
  return (
    <div className="body">
      <Head>
        <title>💪</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="description" content="Appka Treningowa" />
      </Head>

      <main className="main-wrapper">
          <List/>
      </main>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}
export default Home
