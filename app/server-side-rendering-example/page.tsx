import React from 'react';

interface IAlbum {
  id: number;
  userId: number;
  title: string;
}

/**
 * Sever side rendering example
 */
export default async function SSRExample() {
  // Data is cached by default - static rendering (render at build time)
  const res = await fetch('https://jsonplaceholder.typicode.com/albums', {
    // Prevent caching - dynamic rendering (render at request time)
    // cache: 'no-store',
    // invalidate the cache every 10 seconds
    // next: { revalidate: 10 },
  });

  const albums: Array<IAlbum> = await res.json();

  return (
    <div>
      <h1>SSR Example</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}
