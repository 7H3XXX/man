import { unstable_noStore } from "next/cache";
import { fetchTopTracks } from "./spotify";

export async function getTopTracks() {
    unstable_noStore()
  try {
    const {items} = await fetchTopTracks();

    const tracks = items?.map((track, index) => ({
      artist: track.artists.map((_artist) => _artist.name).join(", "),
      songUrl: track.external_urls.spotify,
      title: track.name,
      key: index + 1,
      albumCover: track.album.images[0],
    }));
    return tracks;
  } catch (e) {
    console.log(e);
    // throw new Error("Error fetching data");
  }
}
