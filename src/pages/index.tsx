import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

//styles
import { Titulo, Input } from './styles';

export default function Home() {
  return (
    <>
      <Head>
        <title>TIMER UX</title>
        <meta name='description' content='Seja senhor do seu próprio tempo!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        style={{
          fontSize: '2rem',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'orange',
        }}
      >
        <Titulo colorText='purple'>Minha primeira página em Next</Titulo>
      </main>
    </>
  );
}
