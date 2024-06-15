/** Types */
export interface IMediaResults {
  title?: string;
  name?: string;
  popularity: number;
  id: number;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  media_type: string;
}

interface IFetchMediaResults {
  results: Array<IMediaResults>;
  total_pages: number;
  page: number;
}

/**
 * This function fetches all tv shows and movies matching a title, sorted by popularity
 *
 * TODO: Figure out pagination + sorting (can't just query by popularity)
 */
export async function fetchMediaResults({
  query,
}: {
  query: string;
}): Promise<IFetchMediaResults['results']> {
  if (!query) {
    return [];
  }

  const seen_ids = new Set<string>();
  let results: Array<IMediaResults> = [];

  let page = 1;
  let total_pages = 1;

  while (page <= total_pages) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}&page=${page}`,
      {
        headers: { Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}` },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const json_results: IFetchMediaResults = await response.json();

    json_results.results.forEach((result) => {
      const unique_key = `${result.media_type}-${result.id}`;

      if (!seen_ids.has(unique_key)) {
        if (result.media_type === 'movie' || result.media_type === 'tv') {
          results.push(result);
          seen_ids.add(unique_key);
        }
      }
    });

    total_pages = json_results.total_pages;
    page = json_results.page + 1;
  }

  const sorted_results = results.sort((a, b) => b.popularity - a.popularity);

  return sorted_results;
}
