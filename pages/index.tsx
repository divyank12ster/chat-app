import Head from 'next/head';
import ChatScreen from '../components/ChatScreen';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chat PWA</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ChatScreen />
    </div>
  );
}