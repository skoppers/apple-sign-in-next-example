import Head from 'next/head'
import styles from '../styles/Home.module.css'

import AppleSignin from 'react-apple-signin-auth';

/** Apple Signin button */
const MyAppleSigninButton = () => (
  <AppleSignin
    authOptions={{
      clientId: 'com.example.web',
      scope: 'email name',
      redirectURI: 'https://example.com',
      usePopup: true
    }}
    render={(props) => <button {...props}>My Custom Button</button>}
  />
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyAppleSigninButton />
    </div>
  )
}
