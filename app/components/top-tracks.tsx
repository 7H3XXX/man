import { getTopTracks } from "lib/utils";
import Image from "next/image";
import Link from "next/link";

type TracksData = {
    artist: string;
    songUrl: string;
    title: string;
    albumCover: {
        width: number;
        height: number;
        url: string;
    }
}[]

export default async function TopTracks(){

    const tracks:TracksData = await getTopTracks();

    return (
      <>
        {tracks
          ? tracks?.map((track, index) => (
              <li key={track.songUrl} className="flex items-center gap-3 mb-4">
                <span className="text-3xl text-neutral-600 font-bold inline-block w-5">
                  {index + 1}
                </span>
                <div className="flex justify-center">
                  <Image
                    src={track.albumCover.url}
                    width={100}
                    height={100}
                    alt="d"
                  />
                  <div className="ml-3 -mt-1">
                    <p>{track.artist}</p>
                    <p>
                      <Link href={track.songUrl} className="link-transition">
                        {track.title}
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
            ))
          : "Something went wrong"}
      </>
    );
}