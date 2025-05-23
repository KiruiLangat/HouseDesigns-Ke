import Head from 'next/head';
import { useRouter } from 'next/router';

export default function CanonicalURL() {
  const router = useRouter();
  const canonicalURL = `https://housedesigns.co.ke${router.asPath}`;
  
  return (
    <Head>
      <link rel="canonical" href={canonicalURL} />
    </Head>
  );
}
