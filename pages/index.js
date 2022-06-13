import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import React from 'react'

export default function Home() {

    let [greeting, setGreeting] = React.useState("")

    let greetings = ['Hello World', "Hey", 'Hi', 'Howdy', 'Bonjour', 'Hey there']

    React.useEffect(() => {
        setGreeting(greetings[Math.floor(Math.random() * greetings.length)])
    }, [])

  return (
    <div>
        <Head>
            <title>
                Neo
            </title>
        </Head>

        <div className={styles.background}>

            <div className={styles.logo}>
                <p className={styles.text}>{greeting}, I&rsquo;m Neo.</p>
            <div className={styles.wrapper}>
                <Image 
                    src="/neo.png"
                    width="100%"
                    height="100%"
                    position="absolute"
                    top={0}
                    left={0}
                    layout="responsive"
                />
                </div>
            </div>
        <div className={styles.am}>
            <h1 className={styles.amt}>About Me</h1>
            <p className={styles.amp}>Hey! I have been coding since 2018 and have learnt many new things along the way. I&rsquo;m experienced with <Link href='https://nodejs.org/en/'><a className={styles.test}>Node.js</a></Link> and am currently learning <Link href="https://reactjs.org/"><a className={styles.test}>React</a></Link> with <Link href="https://nextjs.org/"><a className={styles.test}>Next.js</a></Link> and <Link href="https://graphql.org/"><a className={styles.test}>GraphQl</a></Link>. I mainly work on Databases and APIs, but I plan to become a fullstack developer soon!<br className={styles.br}/><br className={styles.br}/>Apart from development, I also enjoy designing UI (which is also a step for me to become a fullstack). </p>
        </div>
        </div>
    </div>
  )
}
