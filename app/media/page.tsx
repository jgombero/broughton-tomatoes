import React from 'react';

interface IMedia {
  id: number;
  userId: number;
  title: string;
}

export default async function MediaPage() {
  // Sever side rendering example
  const res = await fetch('https://jsonplaceholder.typicode.com/albums', {
    // Prevent caching
    // cache: 'no-store',
    // invalidate the cache every 10 seconds
    // next: { revalidate: 10 },
  });

  const albums: Array<IMedia> = await res.json();

  return (
    <div>
      <h1>Media Page</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}
