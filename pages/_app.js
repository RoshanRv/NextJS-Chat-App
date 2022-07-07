import '../styles/globals.css'
import { ContextProvider } from '../context'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from "../firebaseconfig"
import Login from '../components/Login';

function MyApp({ Component, pageProps }) {

  const [user, loading, error] = useAuthState(auth);

  if(!user){


    return (<Login />)

  }

  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
