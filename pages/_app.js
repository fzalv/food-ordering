import { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
// Penambahan sementara
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
// End
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
}

export default MyApp
