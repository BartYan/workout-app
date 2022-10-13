import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from '../slices/counterSlice'

const Home: NextPage = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Head>
        <title>Workout App</title>
        <meta name="description" content="Application for creating training sessions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Workout App
        </h1>

        <p className={styles.description}>
          exaxmple text
        </p>
        <p>
          redux test {count}
        </p>
        <button onClick={() => dispatch(increment())}>inc</button>
        <button onClick={() => dispatch(decrement())}>dec</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          footer
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
