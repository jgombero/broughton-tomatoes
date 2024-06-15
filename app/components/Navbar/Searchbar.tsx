'use client';

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

export function SearchBar() {
  const router = useRouter();
  const [search_query, setSearchQuery] = useState('');

  function handleSearch(e: FormEvent): void {
    e.preventDefault();

    if (search_query.trim() !== '') {
      router.push(`/search?query=${encodeURIComponent(search_query)}`);
    }
  }

  return (
    <div className="form-control navbar-center">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={search_query}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input input-bordered w-24 bg-red-50 md:w-auto"
        />
      </form>
    </div>
  );
}
