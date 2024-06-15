'use client';

import React from 'react';
import { IMediaResults } from '../api/fetchMediaResults';
import Link from 'next/link';

export default function MediaCard({
  id,
  title,
  name,
  release_date,
  poster_path,
  first_air_date,
  media_type,
}: IMediaResults) {
  const title_or_name = title || name;
  const release_date_or_first_air_date = release_date || first_air_date || '';

  return (
    <Link
      href={`/media?data=${media_type}-${id}`}
      className="white card card-compact m-8 w-60 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
    >
      <figure>
        <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt="media poster" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title_or_name} ({release_date_or_first_air_date.split('-')[0]})
        </h2>
      </div>
    </Link>
  );
}
