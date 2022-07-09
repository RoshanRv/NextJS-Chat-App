import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from "../firebaseconfig"
import Login from '../components/Login';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  const [user, loading, error] = useAuthState(auth);
  

  if(!user){


    return (<Login />)

  }

  return (
    <>
    <Head>
       <title>Chat App | Chats</title>
    </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
