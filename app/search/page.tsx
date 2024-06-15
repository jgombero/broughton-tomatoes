import React from 'react';
import { fetchMediaResults } from './api/fetchMediaResults';
import MediaCard from './components/MediaCard';

export default async function SearchResultsPage({
  searchParams,
}: {
  searchParams: { ['query']: string };
}) {
  const query_param = searchParams.query;

  const media_results = await fetchMediaResults({ query: query_param });

  return (
    <div className="flex flex-wrap p-2">
      {/* If there are no results, display a message */}
      {media_results.length === 0 && <>No Results!!</>}

      {media_results.map((result) => {
        return <MediaCard key={result.id} {...result} />;
      })}
    </div>
  );
}
