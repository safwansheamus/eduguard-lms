// pages/index.tsx
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Selamat Datang di Aplikasi</h1>
      <p>Ini adalah halaman utama aplikasi.</p>
      
      <Link href="/auth/sign-up" passHref>
        <a>Sign Up</a>
      </Link>
      <br />
      <Link href="/auth/sign-in" passHref>
        <a>Sign In</a>
      </Link>
    </div>
  );
};

export default Home;
