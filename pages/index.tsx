import Head from 'next/head';
import ChatScreen from '../components/ChatScreen';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/app_icon.png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <ChatScreen />
    </div>
  );
}