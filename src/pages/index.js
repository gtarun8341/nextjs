import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - My App</title>
        <meta name="description" content="Welcome to My App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-4">
        <h1 className="text-3xl font-bold">Welcome to My App</h1>
        <p className="mt-2 text-lg">Explore our features and stay updated with the latest news.</p>
      </main>

      <Footer />
    </div>
  );
}
