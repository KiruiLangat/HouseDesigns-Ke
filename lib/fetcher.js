/**
 * Shared fetcher utility for SWR hooks.
 * Throws on non-OK responses so SWR surfaces errors correctly.
 */
export default async function fetcher(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.status = res.status;
    throw error;
  }
  return res.json();
}
