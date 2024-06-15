import React from 'react';
import { fetchMediaById } from './api/fetchMediaById';

/** Types */
export interface IMediaPageProps {
  searchParams: { ['data']: string };
}

export default async function MediaPage({ searchParams }: IMediaPageProps) {
  const query_param = searchParams.data;

  const results = await fetchMediaById(query_param);
  const title = results.title || results.name;
  console.log('🚀 ~ MediaPage ~ results:', results);

  return (
    <div className="hero min-h-screen bg-red-50">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={`http://image.tmdb.org/t/p/w500/${results.poster_path}`}
          alt="media poster"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{results.overview}</p>
          <button className="btn btn-primary">Recommend</button>
        </div>
      </div>
    </div>
  );
}
