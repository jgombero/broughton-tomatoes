/** Types */
export interface IMediaResult {
  name?: string;
  popularity: number;
  id: number;
  poster_path: string;
  release_date: string;
  overview: string;
  title?: string;
}

/**
 * This function assumes that the query_param is a string that contains the media type and the id of the media formatted as `${media_type}-${id}`
 */
export async function fetchMediaById(query_param: string): Promise<IMediaResult> {
  const [media_type, id] = query_param.split('-');

  const result = await fetch(`https://api.themoviedb.org/3/${media_type}/${id}`, {
    headers: { Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}` },
  });

  return await result.json();
}
