import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Home</h1>

      {/* Links are like anchors but Next knows not to refetch all files on render :) */}
      <Link href='login'>Login</Link>
      <Link href='recommendations'>Recommendations</Link>
    </main>
  );
}
